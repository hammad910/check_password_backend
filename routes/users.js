const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        return res.json({ message: 'User registered successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to register user', error });
    }
});

module.exports = router;
