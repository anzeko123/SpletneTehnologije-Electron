let express = require("express");

const {saveWmsLayer, getAllWmsLayer, deleteWmsLayer} = require("../services/wms-service");

let router = express.Router();

router.post('/save', saveWmsLayer);

router.get('/get-all', getAllWmsLayer);

router.delete('/delete/:id', deleteWmsLayer);

module.exports = router;