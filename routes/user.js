const express = require("express");
const router = express.Router();
const { faker } = require('@faker-js/faker')

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    name: faker.name.fullName(),
    message: "The app is working properly!",
  });
});

module.exports = router;
