const express = require('express');
const router = express.Router();

const ModuleService = require('../module-service');
const moduleService = new ModuleService();

/**
 * Will get the list of contacts
 */
router.get('/contacts', (req, res) => {
    res.json(moduleService.getContacts());
});

/**
 * Will get the list of contacts
 */
router.post('/contacts', (req, res) => {
    res.json(moduleService.addContact(req.body));
});

/**
 * Will delete a contact
 */
router.delete('/contacts/:id', (req, res) => {
    let contact = moduleService.findContactById(req.params.id);
    moduleService.deleteContact(contact);
    res.status(200).end("OK");
});

module.exports = router;