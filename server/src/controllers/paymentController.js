
import { SuccessResponse } from "../helpers/responseCode.js";
import Payment from "../models/paymentModel.js";

export const CreatePayment = async (req, res, next) => {
    try {
        const { email, paymentMethod } = req.body;
        
        if (!email || !paymentMethod) {
            return res.status(400).json({
                success: false,
                message: "Email and payment method are required"
            });
        }
        
        // Create new payment record
        const newPayment = new Payment({
            email,
            method: paymentMethod
        });
        
        // Save to database
        await newPayment.save();
        
        // Return success response
        return res.status(200).json({
            success: true,
            message: "Payment initiated successfully"
        });
        
        // Note: In a real implementation, you would redirect to payment gateway
        // or handle the actual payment processing here
        
    } catch (error) {
        console.error("Payment creation error:", error);
        
        // Handle specific errors if needed
        return res.status(500).json({
            success: false,
            message: "Couldn't connect to server, please try again later or contact support team"
        });
    }
}




export const GetAllPayment = async (req, res, next) => {
    try {
        const paymentReqs = await Payment.find({});

        return SuccessResponse(res, {
            message : "return all the payment req",
            payload : {
                paymentReqs
            }
        })
    } catch (error) {
        next(error);
    }
}