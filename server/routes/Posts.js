const express = require('express');
const router = express.Router();
const { Posts} = require("../models");


router.get("/", async (req, res) => {
  const listOfposts = await Posts.findAll();
  res.json(listOfposts)

})

router.post("/", async (req, res) => {
  const data = req.body;
  const post = await  Posts.create(data);
  res.json(post);

})

router.delete("/:postId", async(req, res) => {
  const postId = req.params.postId;
  await Posts.destroy({
    where: {
      id : postId
    }
  });
  res.json("DELETED SUCCESSFULLY")
})

router.put("/:postId", async(req, res) => {
  const data = req.body;
  const postId = req.params.postId;
  const updatedPost = await Posts.update(data , {where : {id : postId}});
  const post = await Posts.findByPk(req.params.postId);
  await post.update(data)
  res.json(post)
})


module.exports = router;
