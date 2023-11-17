const express = require('express');
const router = express.Router();

const getNewsDataAsync = require('../utils/newsDataService.js')
/* GET users listing. */
// router.get('/', async (req, res, next) => {
//   // res.send('respond with a resource');
//   try {
//     const response = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     const deckData = response.data
//     res.json({deckData})
//   }catch (error){
//     console.error(error);
//     res.status(500).json({error: "Internal server error"})
//   }
// });
router.get('/', async (req, res, next) => {
  // res.send('respond with a resource');
  try {
    const news = await getNewsDataAsync()
    // const newsData = response.data.response.results
    res.json({news})
  }catch (error){
    console.error(error);
    res.status(500).json({error: "Internal server error"})
  }
});

module.exports = router;
