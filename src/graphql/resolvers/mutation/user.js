const { CreateNewUser } = require('../../../usecase/user/create')

module.exports = {
    async register(_, {name, email, password}){  
      return new Promise((ok, nok) =>{
        return ok(CreateNewUser({name, email, password}) )
      }).catch(err =>{
        return nok(err)
      })
    }
}

