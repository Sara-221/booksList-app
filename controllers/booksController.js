const Book = require('../models/BookModel')


// see books (table view)
const seeBooks = (req,res) => {

    Book.find((error,books)=>{
        if(error){
            console.log('Books cannot be displayed');
            return res.json({
                ok:false,
                msg: 'Error trying to show the book list'
            })
        }else{    
            res.render('back/books', {
                books
            })
        }
    })
}

// create book (view)
const addBook = (req,res)=>{
    res.render('back/addbook');
}

// view edit
const viewEditBook = (req,res) => {

    const id = req.params.id;
    
    Book.findOne({_id:id},(error,book)=>{
        if(error){
            return res.json({
                ok: false,
                msg: 'Error editing the book'
            })
        }else{
            res.render('back/editbook',{book});
        }
    })
}

// add new
const newBook = (req,res)=>{

    // console.log(req.body.title)

    // const {title,author,description, category, publishDate}=req.body;

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        categories: req.body.categories,
        publishDate: req.body.publishDate,
        pages: req.body.pages
    })

    console.log(book)

    book.save((error,book)=>{
        console.log(book)
        if(error){
            return res.json({
                ok:false,
                msg:'error adding book'
            })
        }
        res.redirect('/admin/books')
    })
}


const seeOneBook = (req,res) => {
    // const id = req.params.id;
    const {id} = req.params;
    Book.findOne({_id:id},(error,book)=>{
        if(error){
            return res.json({
                ok:false,
                msg:'Cannot display book'
            })
        }else{
            res.render('back/seebook',{book})
        }
    })
}

const editBook = (req,res) => {

    const {id,title,author,description} = req.body;

    Book.findByIdAndUpdate(id,{title,author,description},(error,books)=>{
        if(error){
            return res.json({
                ok:false,
                msg: 'Cannot edit book'
            })
        }else{
            res.redirect('/admin/books')
        }
    })
}

const deleteBook = (req,res) => {

    const id = req.params.id;

    // Usar mejor findByIdAndRemove?

    Book.findByIdAndDelete(id,(error,book)=>{
        if(error){
            return res.json({
                ok: false,
                msg: 'Cannot delete book'
            })
        }else{
            res.redirect('/admin/books')
        }
    })
}

module.exports={
    seeBooks,
    seeOneBook,
    addBook,
    newBook,
    viewEditBook,
    editBook,
    deleteBook
}