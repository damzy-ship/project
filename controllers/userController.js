const User = require('../models/User');
const Saved = require('../models/SavedItem')

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

exports.getMyAccount = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        res.status(200).json({
            status: "success",
            data: {
                user
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "could not get user account",
            message: err
        })
    }
}

exports.updateMyAccount = async (req, res) => {
    const userId = req.params.id;
    try {
        await User.findByIdAndUpdate(userId, req.body, {
            runValidators: true,
        });
        // const {
        //     password,
        //     passwordConfirm, 
        //     ...others
        // } = updatedUser._doc;

        res.status(200).json({
            status: 'Success',
            message: "user account successfully updated",
            // data: {
            //     user: others,
            // },
        });

    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "could not update user account",
            message: err
        })
    }

}

exports.deleteUserAccount = async (req, res) => {
    const userId = req.body.userId;
    try {
        await User.findByIdAndDelete(userId);
        await Saved.findOneAndDelete(userId);
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "could not delete user account",
            message: err
        })
    }
}