const Error = require("../middleware/error.js").createError;
const Comment = require("../models/Comment.js");
const Video = require("../models/Video.js");

module.exports = {
  addComment: async (req, res, next) => {
    const newComment = new Comment({ userId: req.user, ...req.body });
    try {
      const saveComment = await newComment.save();
      res.status(200).json(saveComment);
    } catch (err) {
      next(Error(409, "Comment was not created"));
    }
  },

  deleteComment: async (req, res, next) => {
    try {
      const commment = await Comment.findById(res.params.id);
      const video = await Video.findById(res.params.id);
      if (req.user === comment.userId || req.user === video.userId) {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("The comment has been deleted");
      } else {
        return next(Error("You can delete only your comment"));
      }
    } catch (error) {
      next(Error(408, "comment not found"));
    }
  },

  getComment: async (req, res, next) => {
    try {
      const comments = await Comment.find({ videoId: req.params.videoId });
      res.status(200).json(comments);
    } catch (error) {}
  }
};
