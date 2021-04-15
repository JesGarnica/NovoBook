
import React from "react"
import Book from "./Book"
import bookData from "./bookData"

class ReadList extends React.Component {
    constructor() {
        super()
        this.state = {
            books: bookData
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(function(prevState) { // adds 1 to the count property  
            return {
                count: prevState.count + 1 
            }
        })
    }

    render() {
        const books = this.state.books.map(bookItem => 
            <Book key={bookItem.id} data={bookItem}/>
        )
        // creates an array of book components and renders them 

        return (
            <div>
                <h1>novobook</h1>
                {books}
            </div> 
        )
    }
}

export default ReadList