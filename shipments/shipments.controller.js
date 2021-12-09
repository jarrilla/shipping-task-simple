/**
 * cotrollers/shipments.js
 */

 const express = require('express');
 const router = express.Router();
 
 module.exports = router;
 
 // ---------------------------
 // ---------------------------
 // ROUTES
 // ---------------------------
 // ---------------------------
 
 router.get('/', getShipments);
 router.put('/', createShipment);
 router.patch('/', editShipment);
 router.delete('/', deleteShipment);
 
 router.get('/queue', getShipmentQueue);
 
 // ---------------------------
 // ---------------------------
 // CONTROLLER
 // ---------------------------
 // ---------------------------
 
 async function getShipments(req, res) {
   res.sendStatus(502);
 }
 
 async function createShipment(req, res) {
  res.sendStatus(502);
 }
 
 async function editShipment(req, res) {
  res.sendStatus(502);
 }
 
 async function deleteShipment(req, res) {
  res.sendStatus(502);
 }
 
 async function getShipmentQueue(req, res) {
  res.sendStatus(502);
 }