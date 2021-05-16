import React from "react"

class SearchBox extends React.Component {

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.props.executeFetch}>
                    <input placeholder="Enter location" onChange={(elem) => this.props.setState({ memoryLocationName: elem.target.value })}></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        )
    }
}

export default SearchBox