const express = require('express');
const { KickChatMember } = require('../controllers/functions.handler');
const router = express.Router();

router.get("/", (req, res) => {
    const { telegram_id } = req.body;
    res.send("Listo expulsado pirobo")
    KickChatMember(telegram_id);
    res.sendStatus(200);
});

module.exports = router
