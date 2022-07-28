const express = require("express");
const router = express.Router();
const { isPalindrome, reverseString } = require("../auxFunctions/index.js");

router.get("/", async (req, res) => {
  try {
    const { text } = req.query;
    const palindrome = isPalindrome(text);
    const reverse = reverseString(text);
    res
      .status(200)
      .contentType("application/json")
      .send({ text: reverse, palindrome: palindrome });

  } catch {
    res.status(400).contentType("application/json").json({ error: "no text" });
  }
});

module.exports = router;
