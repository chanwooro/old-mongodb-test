const router = require('express').Router();
const User = require('../models/user');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(8).required()
})

router.post('/register', async (req, res) => {
    const validation = schema.validate(req.body);
    if(validation.error){
        res.status(500).send(validation.error.details)
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPw
    })

    try{
        const user = await newUser.save();
        res.send(user);
    }catch(_err){
        res.status(400).send(_err)
    }

})

module.exports = router;