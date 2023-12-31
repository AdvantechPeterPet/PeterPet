import express from "express";
import { insertSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    const userId = req.session.userId;
    res.render('regOwner', { userId: userId });
    console.log(userId);
});

router.post('/', (req, res) => {
    const vars = req.body;

    const data = {
        OwnerId: vars.ownerId,
        UserId: req.session.userId,
        Password: vars.password,
        OwnerName: vars.ownerName,
        Email: vars.email,  
    };

    req.session.ownerId = vars.ownerId;
    insertSql.setOwner(data);
    res.redirect('/regPet');
});

module.exports = router;