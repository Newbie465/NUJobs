const mongoose = require('mongoose');
dbconnect()
async function dbconnect() {

    try {
        await mongoose.connect('mongodb+srv://ChiragB:Chirag1234@cluster0.fuoyx.mongodb.net/NUjobs', {useNewUrlParser : true});
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting')
    }
}

module.exports = mongoose