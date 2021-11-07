import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {

    render() {
        const {books, onChangeShelf} = this.props
        return (
            
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book => book.shelf==="currentlyReading").map(book => (
                                <Book book={book} onChangeShelf={onChangeShelf} />
                            ))}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book=>book.shelf==="wantToRead").map(book=> (
                                <Book book={book} onChangeShelf={onChangeShelf}/>
                            ))}
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book=>book.shelf==="read").map(book=> (
                                <Book book={book} onChangeShelf={onChangeShelf}/>
                            ))}
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default ListBooks