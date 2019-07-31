const mongoose = require('mongoose')

const dbConnect = async () => {
    mongoose.connect("mongodb+srv://vortx:vortx@cluster0-sah7t.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log('database connected has success.')
    }).catch(err => {
        console.error(`error connect database - ${err}`)        
    })
}

module.exports = dbConnect()