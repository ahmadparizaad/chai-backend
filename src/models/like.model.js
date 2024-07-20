import mongoose, {Schema} from "mongoose";

const likeSchema = new Schema(
    {
        likedBy: {
            required: true,
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video",
        },
        tweet: {
            type: Schema.Types.ObjectId,
            ref: "Tweet",
        },
    }, {timestamps: true})

export const Like = new mongoose.model("Like", likeSchema)