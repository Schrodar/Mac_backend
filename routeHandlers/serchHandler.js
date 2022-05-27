const Forum = require("../models/forum");



exports.serchHandling = async (req, res) => {
    try {
        
/*         if(req.body.serch === ""){
            req.body.serch = "No tags"
        } */
        const ArrayOfWords = req.body.serch.split(/\s/);
         // ny filtrerar alla empty Strings
        const ny = ArrayOfWords.filter(word => word !== "")
        
        const promises = ny.map(async string => { 
            const thread = await Forum.find({tags: string})
            return thread
            })

        const getPromises = await Promise.all(promises)

        

        const toBeSent = getPromises.filter(arry => arry.length > 0)
        res.send(toBeSent).status(200) 
    } catch (error) {
        console.log(error)
    }
}