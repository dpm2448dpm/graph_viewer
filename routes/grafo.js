const express = require("express");
const router = express.Router();

/* GET graph page */
router.get('/', (req, res, next) => {
    res.render('graph_viewer');
});

module.exports = router;