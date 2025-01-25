"use strict"

//import packages
import express from "express";
import passport from "passport";

//import controller functions
import { 
    LoginController, 
    LogoutController, 
    GetCurrentUserController,
    HandleRefreshToken,
    CheckEmailController
 } 
from "../controllers/authController.js";

//import middleware functions
import { IsLoggedIn, IsLoggedOut } from "../middlewares/authMiddleware.js";

//validation
import { validateUserLogin } from "../validation/userValidation.js";
import RunValidation from "../validation/index.js";


import { CreateJsonWebToken } from "../helpers/jwt.js";

//create a express router 
const authRouter = express.Router();


authRouter.post("/login",validateUserLogin, RunValidation, IsLoggedOut, LoginController);
authRouter.post("/logout", IsLoggedIn, LogoutController);

authRouter.post("/check-email", CheckEmailController);

// Initiate Google authentication
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/api/auth/login", // Redirect if authentication fails
    session: false, // Disable sessions (use JWT tokens instead)
  }),
  (req, res) => {
    // Generate JWT tokens
    const user = req.user;
    const accessToken = CreateJsonWebToken({ user }, jwtAccessKey, "1m");
    const refreshToken = CreateJsonWebToken({ user }, jwtRefreshKey, "10d");

    // Set cookies
    SetAccessTokenCookie(res, accessToken);
    SetRefreshTokenCookie(res, refreshToken);

    // Redirect to client
    res.redirect("https://weby-client.vercel.app/set-auth?token=" + accessToken);
  }
);







authRouter.get('/current-user', GetCurrentUserController);
authRouter.get("/refresh-token", HandleRefreshToken);
export default authRouter;