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

    onChangeShelf = (value, book) => {
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
        const {books} = this.state

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