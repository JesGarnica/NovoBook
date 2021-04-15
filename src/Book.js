import React from "react"

class Book extends React.Component {
    constructor() {
        super()
        this.statusColor = this.statusColor.bind(this)
    }
    statusColor() {
        let color;
        switch(this.props.data.status) {
            case "Unread":
                color = '#ff7675'
                break
            
            case "In Progress":
                color = '#fdcb6e'
            break

            default: 
                color = '#00b894'
        } 
        return {
            backgroundColor: {color}
        }
    }

    render() {
        return (
            <div className="Book">
                <h2>{this.props.data.name}</h2>
                <p>By {this.props.data.author}</p>
                <p><span className="status" style={this.statusColor}>{this.props.data.status}</span></p>
                <p>Bookmark Page:  {this.props.data.page}</p>
                <h3>Notes</h3>
                <p>{this.props.data.notes}</p>
            </div>
        )
    }
}

export default Book

