import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        FirstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        lastName: String,
        discription: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            trpe: Map,
            of: Boolean,
        },
        Comments: {
            types: Array,
            default: [],
        }
    },
    { timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;