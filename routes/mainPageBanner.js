const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  return res.status(200).json({
    title: 'Title Banner228' ,
    titleDesc: "Title Banner Description!",
    description: 'Banner description Banner description Banner description Banner description',
  });
});

module.exports = router;
