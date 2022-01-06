const express = require('express');
const router = express.Router();
const { Posts} = require("../models");


router.get("/", async (req, res) => {
  const listOfposts = await Posts.findAll();
  res.json(listOfposts)

})

router.post("/", async (req, res) => {
  const post = req.body;
  await  Posts.create(post);
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
  await Posts.update(data , {where : {id : postId}});
  res.json("UPDATED SUCCESSFULLY")
})


module.exports = router;
