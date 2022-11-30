const User = require('../models/User');

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(201).json({
            status: "success",
            message: "new user created",
            data: {
                user: savedUser
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "could not create new user",
            message: err
        })
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const USERS = await User.find();
        res.status(200).json({
            status: "success",
            length: USERS.length,
            data: {
                USERS
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "could not get users",
            message: err
        })
    }
}

