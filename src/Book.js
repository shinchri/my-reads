import React from 'react'

class Book extends React.Component {

    render() {
        const { book, onChangeShelf } = this.props

        const backgroundImage = book.imageLinks["smallThumbnail"]
        
        let shelf = book.shelf
        
        if (!book.shelf) {
            shelf = "none"
        }

        console.log(book)

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${backgroundImage}")` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(e)=>onChangeShelf(e.target.value,book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>
        )
    }
    
}

export default Book