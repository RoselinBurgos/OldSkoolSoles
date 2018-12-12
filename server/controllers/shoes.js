var mongoose = require('mongoose');
var Shoe = mongoose.model('Shoe');
var Review = mongoose.model('Review');



module.exports = {

    index: function(req, res) {
        Shoe.find({},function(err, allShoes){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allShoes)
                console.log({message: "It worked!", Shoe: allShoes});
            }
        });
    },

    create: function(req, res) {
        console.log(req.body);
        Shoe.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        });
    },


    show_one: function(req, res) {
        Shoe.findOne({_id:req.params.id},function(err,allShoes){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allShoes)
                console.log({message: "It worked!", data: allShoes});
            }
        });
    },

    update: function(req, res){
        Shoe.findByIdAndUpdate({_id: req.params.id},{
            $set:{
                name: req.body.name,
                shoe_name : req.body.shoe_name,
                brand: req.body.brand,
                image_url : req.body.image_url,
                purchase_url : req.body.purchase_url,
                review: req.body.review,
                
            }
        }, function(err, data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },


    delete: function(req,res){
        Shoe.findByIdAndRemove({_id:req.params.id},function(err,data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },

    review: function(req,res){
        console.log("back end object review", req.body)
        Review.create(req.body, function(err, data){
            if(err){
                console.log("something went wrong", err);
                res.json(err);
            }
            else{
                Shoe.findByIdAndUpdate({_id: req.params.id}, {$push: {review:data}}, function(err,complete){
                if(err){
                    console.log(err);
                    res.json(err);
                }
                else{
                    console.log("Shoe with comment",complete);
                    res.json(complete);
                }
                })
    
            }
        })
        

    }





}