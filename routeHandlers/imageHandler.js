const sharp = require('sharp');
const multer = require('multer');
const Bild = require('../models/image')
const SiteImg = require('../models/sitePictures');
const { findByIdAndDelete, findById } = require('../models/image');

exports.getPictures = async (req, res) => {
      
    try{
        const bild = await Bild.find({});
        res.status(200).send(bild)
    } catch (err) {
            res.status(400).send(err)
    }

}


exports.getSiteImg = async (req, res) => {
      
    try{
        const bild = await SiteImg.find({});
        res.status(200).send(bild)
    } catch (err) {
            res.status(400).send(err)
    }

}


exports.upload = multer({
    limits: {
        fileSize: 3300000
    },
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/)) {
            return callback(new Error('file must be png jpg jpeg or less then 1.3 mb'))
        }
        
        callback(undefined, true)
    }
})

exports.postSiteImgs = async (req, res) => {
    
    try{
        if(req.file.buffer === undefined){
            throw new Error
        }
        const Buffer = await sharp(req.file.buffer).png().toBuffer()
        const imageInstance = new SiteImg({
            bild: Buffer,
        })

        await imageInstance.save()

        res.send().status(200)
    }catch (err) {
        res.send()
    }


}

exports.errorHandler = (error, req, res, next) => {
    res.status(400).send({ error: error.message })
   }


exports.deletePicturs = (req, res) => {
    res.sendStatus(200)
}


 
exports.postPictures = async (req, res) => {
    
    try{
        if(req.file.buffer === undefined){
            throw new Error
        }
        const Buffer = await sharp(req.file.buffer).png().toBuffer()
        const imageInstance = new Bild({
            bild: Buffer,
            name: req.body.name,
            description: "req.body.description",
            modify: req.body.modify,
            cartActive: false,
            size: req.body.size,
            category: req.body.category,
            amount: 0,
            content: 0
        })

        await imageInstance.save()
        res.send({loading: false, sendFailed: false}).status(200)
    }catch (err) {
        res.send({loading: false, sendFailed: true})
    }


}

exports.errorHandler = (error, req, res, next) => {
    res.status(400).send({ error: error.message })
   }


exports.deletePicturs = async (req, res) => {
      try{
        
        const id = req.body.id
        await Bild.findByIdAndDelete({_id: id});
        res.status(200)
    } catch (err) {
            res.status(400).send(err)
    }  
}

