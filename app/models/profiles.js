const axios = require('axios');

const getUserProfile = async (uid) => {

    let profiles = await axios.get('https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json')

    if( uid ) {
        return profiles.data.find( v => v.userUid === uid )
    } else {
        return profiles.data
    }

}

module.exports = {
    getUserProfile
}