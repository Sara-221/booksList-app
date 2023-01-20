const Book = require('../models/BookModel');

const showBooks=(req,res)=>{

    Book.find((error,books)=>{
        if(error){
            return res.json({
                ok:false,
                msg: 'Error: books cannot be displayed'
            })
        }else{
            res.render('front/index', {books})
        }
    })
}

module.exports={
    showBooks
}