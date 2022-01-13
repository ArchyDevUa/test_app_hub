const Post = require("../models/Post.js");

exports.posts = async (req, res) => {
  try {
    const response = await Post.forge()
      .fetchAll()
      .then(function (data) {
        return data;
      })
      .catch((error) => {
        const res = {
          error: error,
        };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log("Failed to fetch the data ${e}");
  }
};

exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Post.where({ id }).fetch();
    res.json(response);
  } catch (e) {
    console.log("Failed to fetch the post ${e}");
  }
};

exports.create = async (req, res) => {
  try {
    const response = await Post.forge(req.body)
      .save()
      .then(function (data) {
        return data;
      })
      .catch((error) => {
        const res = {
          error: error,
        };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(`Failed to save the data: ${e}`);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const post = Post.forge({ id });
    await post.save(changes);
    return res.json(post);
  } catch (e) {
    console.log(`Failed to update data: ${e}`);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const post = Post.where({ id });
    await post.destroy();
    return res.json("DELETED SUCCESSFULLY");
  } catch (e) {
    console.log(`Failed to Delete data: ${e}`);
  }
};
