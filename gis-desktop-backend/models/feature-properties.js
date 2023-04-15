const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeaturePropertiesSchema = new Schema({
    id_geometry : String,
    properties : Object
});

module.exports.FeatureProperties = mongoose.model("FeatureProperties", FeaturePropertiesSchema);