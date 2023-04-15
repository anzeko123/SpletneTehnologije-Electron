const {saveWmsLayerToDatabase, loadAllWmsLayersFromDatabase, deleteWmsLayerFromDatabase} = require("../dao/wms-repository");

const saveWmsLayer = async (req, res) => {
    const wmsLayer = req.body || {};

    if (wmsLayer.url == null) {
        res.status(500)
            .json({
                "error" : "not wms layer format"
            });
        return
    }

    try {
        await saveWmsLayerToDatabase(wmsLayer);

        res.json({
            "success" : "saved"
        })
    } catch (e) {
        res.status(500)
            .json({
                "error" : `There was an error saving wms layer - error: ${e}`
            });
    }
}

const getAllWmsLayer = async (req, res) => {
    try {
        const allWmsLayer = await loadAllWmsLayersFromDatabase() || []

        res.json(allWmsLayer);
    } catch (e) {
        res.status(500)
            .json({
                "error" : `There was an error getting all wms layers - error: ${e}`
            });
    }
}

const deleteWmsLayer = async (req, res) => {
    try {
        const deleted = await deleteWmsLayerFromDatabase(req.params.id || -1);

        res.json(deleted);
    } catch (e) {
        res.status(500)
            .json({
                "error" : `There was an error deleting wms layer with id: ${req.params.id}, error: ${e}`
            });
    }
}

module.exports = {getAllWmsLayer, deleteWmsLayer, saveWmsLayer}