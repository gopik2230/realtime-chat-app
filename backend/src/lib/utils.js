import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7D'
    }) //add payload to know which user belongs to this token

    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly: true, //This ensures the cookie is only accessable from server not frontend
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development'
    })
    return token
}