const express = require('express');
const router = express.Router();
const {addBook,newBook,seeBooks, seeOneBook, viewEditBook, editBook, deleteBook} = require('../controllers/booksController')

// Welcome page
router.get('/',(req,res)=>{
     res.render('back/index')
})

// See books (table)
router.get('/admin/books', seeBooks)


// View create 1 book
router.get('/admin/addbook', addBook)
// (req,res)=>{
//     return res.json({
//         ok: true,
//         msg: 'view create book'
//     })

// Edit 1 book
router.post('/admin/editbook',editBook)


// See 1 book
router.get('/admin/seebook/:id', seeOneBook)
// (req,res)=>{
//     return res.json({
//         ok: true,
//         msg: 'see one book'
//     })}


// Create 1 book
router.post('/admin/newbook', newBook)

// View edit 1 book
router.get('/admin/editbook/:id', viewEditBook);

// Delete 1 book
router.get('/admin/deletebook/:id', deleteBook)


module.exports=router;