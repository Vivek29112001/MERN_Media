import express from "express";
import{
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import {verifyToken} from "../middleware/auth.js";


const router = express.Router();

//  READ  /:id -> it tells that the front end is sending the perticular id and we grap the user from database
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);


// update
router.patch("/:id/:friendID", verifyToken, addRemoveFriend);


export default router;
