import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'
import './App.css'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {

    state = {
        books: [],
        query:''
    }

    updateQuery = (query) => {
        this.setState(()=> ({
            query: query.trim()
        }))
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    onChangeShelf = (value, book_id) => {
        const book = this.state.books.filter(book=>book.id===book_id)[0]
        BooksAPI.update(book, value)
            .then(()=>{
                BooksAPI.getAll()
                .then((books) => {
                    this.setState(() => ({
                        books
                    }))
                })
            })
    }



    render() {
        const {books, query} = this.state

        const showingBooks = query ===''
            ? []
            : books.filter((book) => (
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.authors.filter((author)=>author.toLowerCase().includes(query.toLowerCase())).length>0
            ))
        return (
            <div className="app">
                <Routes>
                    <Route exact path='/' element={
                        <ListBooks 
                            books={books}
                            onChangeShelf={this.onChangeShelf}
                        />
                    } 
                    />
                    <Route path='/search' element={
                        <BookSearch
                            books={showingBooks}
                            updateQuery={this.updateQuery}
                            onChangeShelf={this.onChangeShelf}
                        />
                    } 
                    />
                </Routes>
            </div>
            
        )
    }
}

export default BooksApp