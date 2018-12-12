var mongoose = require('mongoose');
var shoe = require('../controllers/shoes.js');

module.exports = function(app){
    
    app.get('/api/shoe', shoe.index);
	app.get('/api/shoe/:id', shoe.show_one);
	app.post('/api/shoe/new', shoe.create);
	app.put('/api/shoe/:id', shoe.update);
	app.delete('/delete/:id', shoe.delete);
	app.post('/api/review/:id', shoe.review)

}