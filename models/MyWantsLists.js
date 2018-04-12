var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var myWantsListsSchema = new Schema({
    idUser: {
        type: String
    },
    name:{
        type: String
    },
    cards:{
        type: Array
    }
});

module.exports = mongoose.model('MyWantsLists', myWantsListsSchema);