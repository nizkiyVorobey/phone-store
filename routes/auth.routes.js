const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const User = require("../models/User");
const bcrypt = require('bcrypt');
const router = Router();
const config = require('../config')

// // api/auth/register
router.post(
    '/register', // path
    [
        check['email', 'invalid imail'].isEnail(),
        check['password', 'min 6 character'].isLength({ min: 6 })
    ], // middlvare
    async(req, res) => { // function
        try {
            const errors = validationResult(req); // тут мы валидируем наши поля

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "You send invalid data"
                })
            }

            const { email, password } = req.body;

            const candidate = await User.findOne({ email });

            if (candidate) {
                res.status(400).json({
                    message: "This user exist!"
                })
            }

            const hashedPassword = await bcrypt.hash(password, 12);

            const user = new User({ email, password: hashedPassword });

            await user.save();

        } catch (err) {
            res.status(500).json({
                message: "Something went wrong, try again"
            })
        }
    })

// // api/auth/login
router.post(
    '/login', //path
    [
        check['email', 'invalid imail'].normalizeEmail().isEnail(),
        check['password', 'Passwrod must exist'].exist()
    ], // middlvare
    async(req, res) => { // function
        try {
            const errors = validationResult(req); // тут мы валидируем наши поля

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Error auth"
                })
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    message: 'User does not exist'
                })
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({
                    message: 'not correct password, try again'
                })
            }


            const token = jwt.sign({ userId: user.id },
                config.get('jwtSecret'), // секретный ключ
                { expiresIn: '1h' } // сколько бкдет действителен токен
            )

            res.json({ token, userId: user.id })

        } catch (err) {
            res.status(500).json({
                message: "Something went wrong, try again"
            })
        }
    })
module.exports = router