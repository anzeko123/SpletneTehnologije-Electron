const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WmsLayerSchema = new Schema({
    group : String,
    name : String,
    url : String,
    properties : Object
});

module.exports.WmsLayer = mongoose.model("WmsLayer", WmsLayerSchema);