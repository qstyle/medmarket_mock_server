const express = require("express");
const router = express.Router();
const fs = require('fs')

path = require('path'),    
filePath = path.join(__dirname, "./public/sliderBackground.jpg")


router.get("/", async (_, res) => {

  return res.status(200).json([{
    title: 'Title Banner1' ,
    titleDesc: "Title Banner Description! 1",
    description: 'Banner description Banner description Banner description Banner description',
    background: `${process.env.BASE_URL}/mainPageBanner/background`
  }, {
    title: 'Title Banner2' ,
    titleDesc: "Title Banner Description! 2",
    description: 'Banner description Banner description Banner description Banner description',
    background: `${process.env.BASE_URL}/mainPageBanner/background`
  }, {
    title: 'Title Banner3' ,
    titleDesc: "Title Banner Description! 3",
    description: 'Banner description Banner description Banner description Banner description',
    background: `${process.env.BASE_URL}/mainPageBanner/background`
  }])
});


router.get("/background", async (_, res) => {
  res.setHeader("Content-Type", "image/jpg");

  require("fs").readFile(filePath, (_, image) => {
    res.end(image);
  })
})

module.exports = router;
