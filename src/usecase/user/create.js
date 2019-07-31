const { save } = require('../../data/userRepository')

module.exports = {
    async CreateNewUser(user) {        
        return new Promise((ok, nok) => {            
            return ok(save(user))
        }).catch(err => {
            return nok(err)
        })
    }
}