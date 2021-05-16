import React from "react"

class LocationInfo extends React.Component {


    render() {
        return (
            <div className="location-info">
                <p>{this.props.data.name}</p>
                <p>{this.props.data.type}</p>
                <p>{this.props.data.dimension}</p>
                {this.props.data.residents ?
                    <p>{this.props.data.residents.length} residents</p>
                    :
                    <div></div>
                }

            </div>
        )
    }
}

export default LocationInfo