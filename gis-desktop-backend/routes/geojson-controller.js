let express = require("express");

const {saveGeojson, getAllGeojson, deleteGeojson} = require("../services/geojson-service");

let router = express.Router();

router.post('/save', saveGeojson);

router.get('/get-all', getAllGeojson);

router.delete('/delete/:id', deleteGeojson);

module.exports = router;