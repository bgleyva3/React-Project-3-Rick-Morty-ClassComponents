import React from "react"

class ResidentInfo extends React.Component {
    render() {
        return (
            <li key={this.props.id}>
                <img src={this.props.image} />
                <p>{this.props.name}</p>
                <p>{this.props.status} - {this.props.species}</p>
                <p>{this.props.location}</p>
                <p>{this.props.episodes} episodes</p>
            </li>
        )
    }
}

export default ResidentInfo