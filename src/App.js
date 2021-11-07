import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import BookSearch from './BookSearch'
import './App.css'
import { Route, Routes } from 'react-router-dom'

class BooksApp extends React.Component {

    state = {
        books: []
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
        console.log(value)
        const book = this.state.books.filter(book=>book.id===book_id)
        console.log(book[0])
        BooksAPI.update(book[0], value)
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
        return (
            <div className="app">
                <Routes>
                    <Route exact path='/' element={
                        <ListBooks 
                            books={this.state.books}
                            onChangeShelf={this.onChangeShelf}
                        />
                    } 
                    />
                    <Route path='/search' element={
                        <BookSearch/>
                    } 
                    />
                </Routes>
            </div>
            
        )
    }
}

export default BooksApp