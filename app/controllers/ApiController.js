
const Users = require('../models/users')
const Profiles = require('../models/profiles')

const sendEmail = require('../utilities/email');

const messageSanta = async(req, res) => {

    const body = req.body;

    console.log("body", body)
    if( body !== null) {
        if( body.userid !== "" && body.wish !== "" ) {
            // check if name is in the database
            let user = await Users.getUser(body.userid)

            if( typeof user !== "undefined" ) {
                let profile = await Profiles.getUserProfile(user.uid)

                if( typeof profile !== 'undefined' ) {

                    // get childs age, must be less than 10
                    let bday = profile.birthdate.split("/")

                    let childBday = new Date(bday[0], bday[2], bday[1])
                    let today = new Date()

                    var childAge = today.getFullYear() - childBday.getFullYear();

                    if( childAge < 10 ) {
                        
                        let email = await sendEmail.sendSantaEmail(user, profile, body.wish);

                        res.json({data: { profile: profile, users: user, email: email } }).end()

                    } else {
                        res.status(400).json({ status: false, message: "The child is already 10 years old or above" }).end()
                    }

                }
            } else {
                res.status(400).json({ status: false, message: "The child is not registered" }).end()
            }
        } else {
            res.status(400).json({ status: false, message: "Data required" }).end()
        }
    } else {
        res.status(400).json({ status: false, message: "Data required" }).end()
    }

}

module.exports = {
    messageSanta
}