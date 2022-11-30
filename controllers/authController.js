const User = require("../models/User");
const cryptoJs = require("crypto-js");
const JWT = require("jsonwebtoken");
const Saved = require("../models/SavedItem");

exports.register = async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    try {
        const savedUser = await newUser.save();
        const {
            password,
            passwordConfirm,
            ...others
        } = savedUser._doc;
        const savedProductCart = await Saved({
            userId: others._id
        }).save();

        res.status(201).json({
            status: "sucsess",
            message: "user registration successful",
            data: {
                newUser: others,
                savedProductCart
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "Regisitration Error",
            message: err
        })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Wrong Credentials"
            })
        }
        const hasdhedPassword = cryptoJs.AES.decrypt(user.password, process.env.PASSWORD_SECRET);
        const actualPassword = hasdhedPassword.toString(cryptoJs.enc.Utf8);

        if (actualPassword != req.body.password) {
            return res.status(401).json({
                status: "fail",
                message: "Wrong Credentials"
            })
        }

        const accessToken = JWT.sign({
                id: user._id,
                role: user.role,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET, {
                expiresIn: "7d"
            }
        );

        const {
            password,
            ...others
        } = user._doc;



        res.status(200).json({
            status: "success",
            message: "User Login successful",
            data: {
                user: {
                    ...others,
                    accessToken
                },
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            summary: "Login Unsuccessful",
            message: err,
        });
    }
}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({
                status: "fail",
                message: "Token is not valid"
            });
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json({
            status: "fail",
            message: "You are not authenticated"
        })
    }
}

exports.verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(401).json({
                status: "fail",
                message: "You are not authorized to do that"
            })
        }
    })
}

exports.verifyTokenAndSeller = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin || req.user.id === req.params.id && req.user.role === "seller") {
            next();
        } else {
            res.status(401).json({
                status: "fail",
                message: "You are not authorized to do that. Seller's only"
            })
        }
    })
};

exports.verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(401).json({
                status: "fail",
                message: "You are not authorized to do that. Admin's only"
            })
        }
    })
}