var mongoose = require('mongoose');

var repository = mongoose.model('User', new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  uid : {type: String, required: false },
  name: { type: String, required: true },
  email:{ type: String, required: true },   
  password: { type: String, required: true }
}))

module.exports = {
  async save(user){
     return new Promise((ok,nok) => {
         new repository(user).save((err, user) =>{
             return err ? nok(err) : ok(user)
         })
     })
   }
}