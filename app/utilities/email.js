
const nodemailer = require("nodemailer");

const sendSantaEmail = async (user, profile, childMessage) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASS
        }
    });

    let message = "";
    let childName = user.username.split('.')

    message += `<p>Child Username: ${user.username}`
    message += `<p>Child Name: ${childName[0]} ${childName[1]}</p>`
    message += `<p>Child Address: ${profile.address}</p>`
    message += `<p>Child Message: ${childMessage}</p>`

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Santa" <do_not_reply@northpole.com>', // sender address
        to: "santa@northpole.com", // list of receivers
        subject: "Child Message Request", // Subject line
        html: message, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    if( info ) {
        return true
    } else {
        return false
    }

}

module.exports = {
    sendSantaEmail
}