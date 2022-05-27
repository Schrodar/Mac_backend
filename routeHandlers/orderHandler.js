const nodemailer = require('nodemailer');
const sharp = require('sharp');
const Bild = require('../models/image');
const Order = require('../models/ordrar')

const incomingOrder = async (req, res, next ) => {
try {
    // separte the objects
    let bigArray = req.body
    let amount_and_id = bigArray.filter(obj => obj._id !== undefined); // remove all undefind ids
    let finalobj = bigArray.filter(obj => obj.name !== undefined);

 

    for (let index = 0; index < amount_and_id.length; index++) {
        const element = amount_and_id[index];
            let id = element._id
            console.log(id);
            let bild = await Bild.findPicutre(id);
            element.bild = bild.bild
    }

      const nyOrder = Order({
        name: finalobj[0].name,
        address: finalobj[0].address,
        city: finalobj[0].city,
        phone: finalobj[0].phone,
        email: finalobj[0].email,
        postnumber: finalobj[0].postnumber,
        bilder: amount_and_id,
        isSent: false

    });    
    await nyOrder.save(); 
    

    //
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "admin@gl-hf.gg", // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Admin" <admin@gl-hf.gg>', // sender address
        to: `schrodar2@gmail.com`, // list of receivers
        subject: "Bestälning bildsomstöd", // Subject line
        html: `
        <div><p>Ny kund  addres att skicak både faktura samt artiklar</p></div>
        <div><p>Name: ${finalobj[0].name}</p></div>
        <div><p>Email: ${finalobj[0].email}</p></div>
        <div><p>Phone: ${finalobj[0].phone}</p></div>
        <div><p>Postnumber: ${finalobj[0].postnumber}</p></div>
        <div><p>City: ${finalobj[0].city}</p></div>
        <div><p>Address: ${finalobj[0].address}</p></div>`
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: 

    res.sendStatus(201);

} catch (error) {
    res.status(405).send(error.errors);
    console.log(error.errors)
}
     next()
}

module.exports = incomingOrder;

/* 
Tomatillos: Tomatillos (also known as Mexican Husk Tomatoes) are a green tomato which has a sour flavor. Although they look very similar to regular tomatoes, they are not just an under ripened version. They have an outer husk that grows over the fruit which you remove before cooking or eating.
Jalapeño: Jalapeño adds spice! Remove the seeds for a milder version, or leave them in to turn the heat up!
Onion & garlic: Onion and garlic add a delicious flavor to this salsa verde recipe.
Cilantro: This herb is used in many Mexican dishes and brings a freshness into the salsa verde.
Lime: To round off this salsa verde recipe I add a squeeze of lime juice for a citrusy zap!


How to make Salsa Verde
Pan-roast the tomatillos, jalapeño, and onion: Firstly, add the olive oil, tomatillos, jalapeno, and onion to a large skillet. I sautéed the ingredients on high heat until caramelized on both sides, which took about 3-4 minutes.
Blend! Next, I transferred the pan-roasted ingredients to a blender (or you can use a food processor or hand blender) along with the garlic, cilantro, and lime juice. I blended it until it was combined. You may have to do this in two batches.
Chill & serve: You can eat this salsa verde right away, or chill it in the refrigerator until you’re ready to serve it */