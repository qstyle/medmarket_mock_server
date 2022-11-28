const express = require("express");
const router = express.Router();
const fs = require('fs')

path = require('path'),    
filePath = path.join(__dirname, "./banner1.jpg")


router.get("/", async (_, res) => {
console.log(process.env.BASE_URL)

  return res.status(200).json({
    title: 'Title Banner228' ,
    titleDesc: "Title Banner Description!",
    description: 'Banner description Banner description Banner description Banner description',
    background: `http://${process.env.BASE_URL}/mainPageBanner/background`
  })
});


router.get("/background", async (_, res)=>{
  res.setHeader("Content-Type", "image/jpg");

  require("fs").readFile(filePath, (_, image) => {
    res.end(image);
  })
})

module.exports = router;
