const Video = require('../models/Video.js')
const Error = require('../middleware/error.js').createError
const mongoose = require('mongoose')

module.exports = {
  addVideo: async (req, res, next) => {
    try {
      // const salt = bcrypt.genSaltSync(10);
      // const hash = bcrypt.hashSync(req.body.password, salt);
      const newVideo = new Video({ ...req.body});
      
      await newVideo.save();
      res.status(200).send("video has been created");
    } catch (err) {
      next(Error);
    }
  },

  updateVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params._id);
      if (!video) return next(Error(404, "Video not found"));
      if (req.user === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(
          req.params._id,
          {  $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedVideo);
      } else {
        return next(err);
      }
    } catch (error) {
      next(err);
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
        return next(err);
      }
    } catch (error) {
      next(err);
    }
  },

  getVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params._id);
      res.status(200).json(video);
    } catch (error) {
      next(err);
    }
  },

  addView: async (req, res, next) => {
    try {
      await Video.findByIdAndUpdate(req.params._id, {
        $inc: { views: 1 }
      });
      res.status(200).json("The view has been increased");
    } catch (error) {
      next(err);
    }
  },

  random: async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ sample: { size: 40 } }]);
      res.status(200).json(videos);
    } catch (error) {
      next(err);
    }
  },

  trend: async (req, res, next) => {
    try {
      const videos = await Video.find().sort({ views: -1 });
      res.status(200).json(videos);
    } catch (error) {
      next(err);
    }
  },

  sub: async (req, res, next) => {
    try {
      const user = await User.findById(req.user);
      const subscribedChannels = user.subcribedUsers;

      const list = await Promise.all(
        subscribedChannels.map(channelId => {
          return Video.find({ userId: channelId });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      next(err);
    }
  },

  // likeVideo: async (req, res, next) => {
  //   try {
  //   } catch (error) {
  //     next(err);
  //   }
  // },

  // dislikeVideo: async (req, res, next) => {
  //   try {
  //   } catch (error) {
  //     next(err);
  //   }
  // }
};
