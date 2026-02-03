const express = require('express')

const router = express.Router()
const Book = require('../models/book.model')


//MIDDLEWARE

const getBook = async(res, req, next) =>{
    let book;
    const {id} = req.params;

    if(!id,match(24)){
        return res.status(404).json({

            message: 'El Id DEL LIBRO NO ES VALIDO'
        }
        )
    }
    try {
    book = await Book.findById(id)
        if(!book){
            return res.status(404).json(
                {
                    message: 'El libro no fue encontrado'
                }
            )
        }
    } catch (error) {
        return res.status(500).jsom({
            message:error.message
        })
    }

    res.book = book;
    next()


}



//Obtener todos los libros

//get

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log('GET ALL', books)
        if(books.length === 0){
            res.status(204).json([])
        }
        res(books)
    } catch (error) {
        res.status(500).json({messege :  error.messege})
    }
})

//Crear un nuevo libro (recurso)

//post

router.post('/', async(req, res) => {

    const{title, author, genre, publicacion_date } = req?.body
    if(!title|| !author || !genre || !publicacion_date){
        return res.status(400).json({
            message: 'Los campos titulo, autor, genere y fecha son obligatorias'
        })
    }


    const book = new Book({
        title,
        author,
        genre,
        publication_date
    })
    try {
        const nweBook = await book.save()
        res.status(201).json(nweBook)
    } catch (error) {
       res.status(400).json({
        messege: error.messege
       })    
    }


})