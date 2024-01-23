module.exports = {
  addVideo: async (req, res, next) => {
    const newVideo = new Video({ userId: req.user._d, ...req.body });
    try {
      const saveVideo = await newVideo.save();
      res.status(200).json(saveVideo);
    } catch (error) {
      next(err);
    }
  },

  updateVideo: async (req, res, next) => {
    try {
      const video = await Video.findById(req.params._d);
      if (!video) return next(Error(404, "Video not found"));
      if (req.user._d === video.userId) {
        const updatedVideo = await Video.findByIdAndUpdate(
          req.params._d,
          {
            $set: req.body
          },
          { new: true }
        );
        res.status(200).json(updatedVideo)
      }
    } catch (error) {
      next(err);
    }
  },

  deleteVideo: async (req, res, next) => {
    try {
        
    } catch (error) {
      next(err);
    }
  },

  getVideo: async (req, res, next) => {
    try {
    } catch (error) {
      next(err);
    }
  },

  likeVideo: async (req, res, next) => {
    try {
    } catch (error) {
      next(err);
    }
  },

  dislikeVideo: async (req, res, next) => {
    try {
    } catch (error) {
      next(err);
    }
  }
};
