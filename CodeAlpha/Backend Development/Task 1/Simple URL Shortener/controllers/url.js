const  shortid  = require("shortid");
const URL = require('../models/url')

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json( { id: shortID});
}

async function handleGetAnalytics(res, req){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortid });
    return res.json({ totalClicks: result.visitHistory.length, 
                      analytics: result.visitHistory
                   });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
}