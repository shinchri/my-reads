import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {

    state = {
        searchBooks: [],
        query: ''
    }

    updateQuery = (query) => {
        BooksAPI.search(query.trim())
            .then((books)=> {
                this.setState(()=> ({
                    searchBooks: books,
                    query: query.trim()
                }))
            })
        
    }

    render() {
        const {onChangeShelf } = this.props

        const showingBooks = this.state.query === ''
            ? []
            : this.state.searchBooks

        return (
            
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event)=> this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.length>0 && showingBooks
                        .filter(book=> (
                            book.imageLinks &&
                            book.authors
                        ))
                        .map(book => (
                            <Book 
                                key={book.id}
                                book={book} 
                                onChangeShelf={onChangeShelf}
                            />
                        ))}

                    </ol>
                </div>
                
            </div>
        )
    }

}

export default BookSearch