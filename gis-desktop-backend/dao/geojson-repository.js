const {FeatureGeometry} = require("../models/feature-geometry");
const {FeatureProperties} = require("../models/feature-properties");

const saveGeojsonFeatureToDatabase = async (name, group, feature) => {
    const featureGeometryInstance = new FeatureGeometry({
        group : group,
        name : name,
        type : feature.geometry.type,
        coordinates : feature.geometry.coordinates
    });

    const insertFeature = await featureGeometryInstance.save();

    return insertFeature;
}

const saveGeojsonFeaturePropertiesToDatabase = async (id, properties) => {
    const featurePropertiesInstance = new FeatureProperties({
       id_geometry : id,
       properties : properties
    });

    const insertedProperties = await featurePropertiesInstance.save();

    return insertedProperties;
}

const loadAllGeojsonFromDatabase = async () => {
    return FeatureGeometry.find();
}

const loadPropertiesForFeatureFromDatabase = async (id) => {
    return FeatureProperties.findOne({
        id_geometry : id
    });
}

const deleteFeatureFromDatabase = async (id) => {
    const feature = await FeatureGeometry.findOneAndDelete({
        _id : id
    });
    const properties = await FeatureProperties.findOneAndDelete({
        id_geometry : id
    });
    return {
        feature : feature,
        properties : properties
    }
}

module.exports = { saveGeojsonFeatureToDatabase, saveGeojsonFeaturePropertiesToDatabase, loadAllGeojsonFromDatabase, loadPropertiesForFeatureFromDatabase, deleteFeatureFromDatabase }