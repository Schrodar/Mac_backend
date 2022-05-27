/* const nodemailer = require('nodemailer');

// lägg till olika atributer i model shemat
const nodeMailer = async (req, res, next) => {
    
         try {
            
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtpout.secureserver.net",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: "admin@gl-hf.gg", // generated ethereal user
                pass: "VknK44wqt5kz445f6f99!?", // generated ethereal password
                },
            });
    
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Admin" <admin@gl-hf.gg>', // sender address
                to: `${req.body.email}`, // list of receivers
                subject: "auth ✔ gl-hf.gg", // Subject line
                text: `Hello`, // plain text 
                html: "<b>Hello world?</b>"
            });
    
            console.log("Message sent: %s", info.messageId);
            // Message sent: 
    
            res.sendStatus(201);
        } catch (e) {
            res.status(400).send(e)
        }


         next()
}

module.exports = nodeMailer; */