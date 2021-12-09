/**
 * models/Shipment.js
 * 
 * TODO:
 * - Complete this file according to the specifications in the README
 */

 const mongoose = require('mongoose');

 const ShipmentSchema = new mongoose.Schema({
   
 });
 
 const ShipmentModel = mongoose.model('shipment', ShipmentSchema);
 module.exports = ShipmentModel;