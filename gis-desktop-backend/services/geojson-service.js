const {saveGeojsonFeatureToDatabase, saveGeojsonFeaturePropertiesToDatabase, loadAllGeojsonFromDatabase, loadPropertiesForFeatureFromDatabase, deleteFeatureFromDatabase} = require("../dao/geojson-repository");
const saveGeojson = async (req, res) => {
    const geojson = req.body || {};

    if (geojson.type != "FeatureCollection") {
        res.status(500)
            .json({
            "error" : "not geojson format"
        });
        return
    }

    try {
        for (const feature of geojson.features || []) {
            const insertedFeature = await saveGeojsonFeatureToDatabase(geojson.name, geojson.group || "Default", feature)
            await saveGeojsonFeaturePropertiesToDatabase(insertedFeature.id, feature.properties)
        }

        res.json({
            "success" : "saved"
        })
    } catch (e) {
        res.status(500)
            .json({
                "error" : `There was an error saving features - error: ${e}`
            });
    }
}

const getAllGeojson = async (req, res) => {
    try {
        const allGeojsonProperties = await loadAllGeojsonFromDatabase() || []

        let geojson = [];
        for (const feature of allGeojsonProperties) {
            const featureProperties= await loadPropertiesForFeatureFromDatabase(feature.id) || {};

            geojson.push({
                id : feature.id,
                group : feature.group,
                name : feature.name,
                type : feature.type,
                coordinates : feature.coordinates,
                properties : featureProperties.properties || {}
            });
        }

        res.json(geojson);
    } catch (e) {
        res.status(500)
            .json({
            "error" : `There was an error getting all features - error: ${e}`
        });
    }
}

const deleteGeojson = async (req, res) => {
    try {
        const deleted = await deleteFeatureFromDatabase(req.params.id || -1);

        res.json(deleted);
    } catch (e) {
        res.status(500)
            .json({
            "error" : `There was an error deleting feature with id: ${req.params.id}, error: ${e}`
        });
    }
}


module.exports = { saveGeojson, getAllGeojson, deleteGeojson }