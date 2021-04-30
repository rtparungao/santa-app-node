const axios = require('axios');

const getUser = async (name = null) => {

    let users = await axios.get('https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json');

    if( name ) {
        return users.data.find( v => v.username === name )
    } else {
        return users.data
    }

}

module.exports = {
    getUser
}