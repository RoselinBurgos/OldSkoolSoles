var mongoose = require('mongoose');


var ReviewSchema = new mongoose.Schema({
    name: {type : String, required : true, minlength: 3},
    review: {type : String, required : true, minlength: 3},
    rating: {type : Number, required : true, minlength: 3},
    completed: {type: Boolean, default: false},
}, {timestamps: true })

var ShoeSchema = new mongoose.Schema({
    shoe_name: {type : String, required : true, minlength: 3},
    brand : {type : String, required : true, minlength: 3},
    image_url : {type : String, required : true, minlength: 3},
    purchase_url : {type : String},
    review: [ReviewSchema],
    completed: {type: Boolean, default: false},
}, {timestamps: true })


mongoose.model('Review', ReviewSchema); 
mongoose.model('Shoe', ShoeSchema);