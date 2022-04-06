const AdvertRepositary = require('../repositary/advert_repositary')


async function saveAdvertAPI(req,res){
    let advert = req.body
    console.log(advert)
    let result = await AdvertRepositary.saveAdvertRepositary(advert,req.userid)
    res.send(result)
}

 async function getAdvertsAPI(req,res){
    let lat = req.query.lat
    let lon = req.query.lon
   res.send(await AdvertRepositary.getAdvertsByLatLonRepositary(lat,lon))
}

function getMyAdvertsAPI(req,res){
    let userid = req.userid
    AdvertRepositary.GetMyAdvertsRepositary(userid).then(response=>{
        console.log(response)
        res.send(response) 
    })
}

module.exports = {saveAdvertAPI,getAdvertsAPI,getMyAdvertsAPI}