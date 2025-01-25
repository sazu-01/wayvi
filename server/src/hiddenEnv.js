//module
import dotenv from "dotenv";

// Load the environment variables
dotenv.config();

// Retrieve the server port variable
const serverPort = process.env.SERVER_PORT;

//Retrive the MongoDB Database link
const MongodbURL = process.env.MongodbURL;

//retrive the secret jwt Private Key
const jwtPrivateKey = process.env.jwtPrivateKey;

//retrive the secret jwt access key
const jwtAccessKey = process.env.jwtAccessKey;

//retrive smtp username and password
const smtpUsername = process.env.smtpUsername;
const smtpPassword = process.env.smtpPassword;

//set the default Image for user and product , if user don't upload image
const defaultImageForUser = `https://res.cloudinary.com/ddpiqdmkl/image/upload/v1713249700/unishop/images/users/dunpcpomdz7ghqypnquk.jpg`;


//retrive resetPasswordKey from env
const resetPasswordKey = process.env.jwtResetPasswordKey;

//retrive refresh JWT Key from env
const jwtRefreshKey = process.env.jwtRefreshKey;

//retrive cloudinary keys from env
const cloudeName = process.env.CLOUDE_NAME;

const cloudeApiKey = process.env.CLOUDE_API_KEY;

const cloudeApiSecret = process.env.CLOUDE_API_SECRET;

//client url
const clientUrl = process.env.clientUrl;


const GOOGLE_CLIENT_ID = process.env.client_id;

const GOOGLE_CLIENT_SECRET = process.env.client_secret;


export {
  serverPort,
  MongodbURL,
  jwtPrivateKey,
  jwtAccessKey,
  smtpUsername,
  smtpPassword,
  clientUrl,
  defaultImageForUser,
  resetPasswordKey,
  jwtRefreshKey,
  cloudeName,
  cloudeApiKey,
  cloudeApiSecret,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
};
