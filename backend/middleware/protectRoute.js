import jwt from 'jsonwebtoken'

import User from '../models/userModels.js'

export const protectRoute = async (req, res, next) => {
    try {
        console.log("Protect Route")
        //retrieve token from req
        const token = req.cookies.jwt
        
        if (!token) {
            res.status(401).json({
                error: "Unauthorized - Token missing"
            })
        }

        //if token available, decode the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        
        if (!decodedToken) {
            res.status(401).json({
                error: "Unauthorized - Invalid Token"
            })
        }

        //if decode token, available get user id to search in db
        const user = await User.findById(decodedToken.userId).select("-password")

        if (!user) {
            res.status(401).json({
                error: "User not found"
            })
        }
          
        //if user available, update req.user
        req.user = user
        next()

    } catch (error) {
        console.log("User Authentication Failed");
        res.status(500).json({
            error: error.message
        })
    }
}