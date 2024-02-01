const Video = require("../models/Video.js");
const Error = require("../middleware/error.js").createError;
const mongoose = require("mongoose");
const User = require("../models/User.js");

module.exports = {
  addVideo: async (req, res, next) => {
    const newVideo = new Video({ userId: req.user, ...req.body });
    try {
      const saveVideo = await newVideo.save();
      res.status(200).json(saveVideo);
    } catch (err) {
      next(Error(409, "video was not created"));
    }
  },

  updateVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params._id);
      if (!video) return next(Error(404, "Video not found"));
      if (req.user === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(
          req.params._id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedVideo);
      } else {
        return next(Error(409, "video was not created"));
      }
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  deleteVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params._id);
      if (!video) return next(Error(404, "Video not found"));
      if (req.user === video.userId) {
        await Video.findByIdAndDelete(req.params._id);
        res.status(200).json("The video has been deleted");
      } else {
        return next(Error(409, "video was not created"));
      }
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  getVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  addView: async (req, res, next) => {
    try {
      await Video.findByIdAndUpdate(req.params._id, {
        $inc: { views: 1 }
      });
      res.status(200).json("The view has been increased");
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  random: async (req, res, next) => {
    try {
      const videos = await Video.aggregate([
        // Sample one random document from the collection
        { $sample: { size: 3 } }
      ]);
      
      res.status(200).json(videos);
    } catch (error) {
      next(Error(404, "random videos not found"));
    }
  },

  trend: async (req, res, next) => {
    try {
      const videos = await Video.find().sort({ views: -1 });
      res.status(200).json(videos);
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  sub: async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      const subscribedChannels = user.subscribedUsers;

      const list = await Promise.all(
        subscribedChannels.map(channelId => {
          return Video.find({ userId: channelId });
        })
      );
      res
        .status(200)
        .json(list.flat().sort((a, b) => b.createdArt - a.craetedAt));
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },

  getBytag: async (req, res, next) => {
    const tags = req.query.tags.split(",");
    try {
      const videos = await Video.find({ tags: { $in: tags } }).limit(20);
      res.status(200).json(videos);
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  },
  search: async (req, res, next) => {
    const query = req.query.q;
    try {
      const videos = await Video.find({
        title: { $regex: query, $options: "i" }
      }).limit(40);
      res.status(200).json(videos);
    } catch (error) {
      next(Error(409, "video was not created"));
    }
  }
};
