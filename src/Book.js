import React from 'react'

class Book extends React.Component {

    

    render() {
        const { books, book, onChangeShelf } = this.props

        const backgroundImage = book.imageLinks["smallThumbnail"]
        let shelf = book.shelf;
        if (books) {
            const bookOnShelf = books.find(({id}) => book.id === id)
            shelf = bookOnShelf ? bookOnShelf.shelf : 'none'
        }
        

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
                    <div className="book-authors">{book.authors.join(", ")}</div>
                </div>
            </li>
        )
    }
    
}

export default Book