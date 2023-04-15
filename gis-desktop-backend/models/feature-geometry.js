const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeatureGeometrySchema = new Schema({
    group : String,
    name : String,
    type : String,
    coordinates : Object
});

module.exports.FeatureGeometry = mongoose.model("FeatureGeometry", FeatureGeometrySchema);