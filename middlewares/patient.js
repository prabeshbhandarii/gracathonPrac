import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export const patientMiddleware = (req, res, next) =>{
    const auth = req.headers.authorization
    const token = auth.split('Bearer ')[1]
    console.log(JWT_SECRET)
    try {
        const result = jwt.verify(token, JWT_SECRET)
        next()
    } catch (err) {
        return res.json({
            msg: "failure to verify token"
        })
    }
}