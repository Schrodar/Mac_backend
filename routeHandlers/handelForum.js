const Forum = require('../models/forum');
const ForumImg = require('../models/forumImg');
const multer = require('multer');
const sharp = require('sharp');
const sizeOf = require('image-size');



exports.getForum = async (req, res) =>  {

    try {

        const forum = await Forum.find({})

        res.status(200).send(forum)
    } catch (error) {
        console.log(error)
    }

}

exports.upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.(jpg|jpeg|png|JPG|PNG|JPEG)$/)) {
            return callback(new Error('file must be png jpg jpeg or less then 1.7 mb'))
        }
        
        callback(undefined, true)
    }
})

exports.forumImg = async (req, res) => {
    
   try {
       
    const forumImg = await ForumImg.findThreadImg(req.body.id)
    forumImg.img = true
    res.send(forumImg).status(200)

   } catch (error) {
       res.sendStatus(500)
   }

}


exports.postForum = async (req, res, next) => {
    
    req.body.switch = false
    
    try {
        const forumImg = new ForumImg

        const nyttForum = Forum({
            topic: req.body.topic,
            text: req.body.text,
            switch: req.body.switch
        })

        // add tag to body if exsist 
        if(req.body.tags !== undefined){
            nyttForum.tags = req.body.tags
        }
    
        
        //Prepping the img to be sent to database
        if(req.file.buffer !== undefined){
        const Buffer = await sharp(req.file.buffer).png().toBuffer()
        forumImg.bild = Buffer
        // CALCULATE aspect ratio
        const dimensions = sizeOf(req.file.buffer)
        let w = dimensions.width;
        let h = dimensions.height
        let ar = h/w
        let number = Math.round(ar * 10) / 10
        forumImg.ar = number

        }
       

        await nyttForum.save().then((thread) => {
            if(req.file.buffer !== undefined){
                forumImg.thread = thread._id
                forumImg.save().then((img) => {
                    
                    res.send({thread, img}).status(200)
                    
                })
            }
            else{
                res.send(thread).status(200)
            }

        })
        
       

        
    
        
    
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}

exports.postComments = async (req, res) => {

    try{
                //Getting the date
        const getCurrentMonth = () => {
        const month = new Date().getMonth() + 1;
        if (month < 10) {
            return `0${month}`;
        } else {
            return month;
        }
        };
        //Getting the date
        const getCurrentDay = () => {
        const day = new Date().getDate();
        if (day < 10) {
            return `0${day}`;
        } else {
            return day;
        }
        };

        //Current day/month/year
        const currentYear = new Date().getFullYear();
        const currentMonth = getCurrentMonth();
        const currentDay = getCurrentDay();

        const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

        let id = req.body.id

        const Thread = await Forum.findThread(id)

        if(req.body.text === undefined){
            res.status(400)
            throw new Error("Pleas add text")
        }
        
        let obj = {
           text: req.body.text,
           date: currentDate
        }
        
        Thread.comments.push(obj)
        await Thread.save()
        

        let send = Thread.comments.slice(-1)
        res.send(send)


    } catch (err){
        console.log(err)
    }
}