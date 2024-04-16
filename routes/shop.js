const path = require("path")
const express = require("express")
const rootDir = require("../util/path")
const adminData = require("./admin");
const {products} = require("./admin");


const router = express.Router();

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, "views", "shop.html"))
    res.render('shop', {prods: products, docTitle: 'My Shop'});
})

module.exports = router;