const express = require('express');
const router = new express.Router();
const Quote = require('../models/quote.js');

router.post('/', async (req, res) => {
    try{
        const quote = new Quote (req.body);
        const savedQuote = await quote.save();
        console.log(savedQuote);
        res.status(200).json({ success: true, message: "Quote created successfully", data: savedQuote })
    }catch(e){
        res.status(500).json({ error: message.error });
    }
})

router.get('/', async (req, res) => {
    try {
        const accessQuotes = await Quote.find();
        res.status(200).json({ success: true, message: "successfully done", data: accessQuotes })
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getQuote = await Quote.findById(_id);
        res.status(200).json({ success: true, data: getQuote })
    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        // await Quote.updateOne(_id,req.body)
        const updatedData = await Quote.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json({ success: true, message: "successfully updated", data: updatedData })
    } catch (error) {
        res.status(500).json({ error: message.error });
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Deleted successfully.", data: deletedQuote });
    } catch (error) {
        res.status(500).json({ error: 'Error'});
    }
})

module.exports = router;