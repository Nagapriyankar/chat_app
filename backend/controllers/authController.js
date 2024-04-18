import User from "../models/userModels.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js"

//login user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        console.log(username, password)
        //check if all fields provided
        if (!username || !password) {
           return res.status(400).json({error : "Please fill in all the field"})
        }

        //check if user exist
        const user = await User.findOne({ username })
        
        //check if pwd is correct
        const isPasswordMatch = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordMatch) {
            return res.status(400).json({ error: "Invalid Email or password" })
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        console.log("Error in Login controller", error.message);
        res.status(500).json({error: error.message})
    }
}

//signup user
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body


        // requiredfield validation
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all the fields" })
        }
        //passwordvalidation
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must contain atleast 6 characters" })
        }

        //check if pwd matches
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

        //check  if username is already registered
        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        //hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //set profile pic
        //  https://avatar-placeholder.iran.liara.run
        const boyProfile = 'https://avatar.iran.liara.run/public/boy'
        const girlProfile = 'https://avatar.iran.liara.run/public/girl'

        //create user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfile : girlProfile
        })

        if (newUser) {
            //generate jwt token
            generateToken(newUser._id, res)

            //save user
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(500).json({
                error: "Invalid User Data"
            })
        }
    }
    catch (error) {
        console.log("Error in signup Controller");
        res.status(500).json({
            error: error.message
        })
    }
}

//logout user
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: '0' })
        res.status(200).json({
            message: "User Logout successful"
        })

    } catch (error) {
        console.log("Error in logout Controller");
        res.status(500).json({
            error: error.message
        })
    }
}