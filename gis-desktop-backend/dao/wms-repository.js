const {WmsLayer} = require("../models/wms-layer");

const saveWmsLayerToDatabase = async (wms) => {
    const wmsLayerInstance = new WmsLayer({
        group : wms.group,
        name : wms.name,
        url : wms.url,
        properties : wms.properties
    });

    const insertWmsLayer = await wmsLayerInstance.save();

    return insertWmsLayer;
}

const loadAllWmsLayersFromDatabase = async () => {
    return WmsLayer.find();
}

const deleteWmsLayerFromDatabase = async (id) => {
    const wmsLayer = await WmsLayer.findOneAndDelete({
        _id : id
    });

    return wmsLayer;
}

module.exports = { saveWmsLayerToDatabase, loadAllWmsLayersFromDatabase, deleteWmsLayerFromDatabase }