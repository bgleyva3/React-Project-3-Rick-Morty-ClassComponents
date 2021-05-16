import React from "react"
import SearchBox from "./SearchBox";
import LocationInfo from "./LocationInfo"
import ResidentContainer from "./ResidentContainer"

class LocationContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            data: "",
            locationName: "",
            memoryLocationName: "",
            firstTimeLocation: true
        }
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        const randomId = Math.round(Math.random() * 108)
        fetch(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(response => response.json())
            .then(data => { this.setState({ data: data }); console.log(data) })
    }

    executeFetch = (elem) => {
        elem.preventDefault();
        this.setState({ locationName: this.state.memoryLocationName })
    }

    componentDidUpdate(prevProps, prevState) {
        const previusData = prevState.data;
        const currentData = this.state.data;
        if (currentData !== previusData && this.state.firstTimeLocation) {
            if (currentData.residents.length === 0) {
                const randomId = Math.round(Math.random() * 108)
                fetch(`https://rickandmortyapi.com/api/location/${randomId}`)
                    .then(response => response.json())
                    .then(data => { this.setState({ data: data }); console.log(data) })
            }
        }
        const previousLocation = prevState.locationName
        const currentLocation = this.state.locationName
        if (currentLocation !== previousLocation) {
            this.setState({ firstTimeLocation: false })
            fetch(`https://rickandmortyapi.com/api/location/?name=${this.state.locationName}`)
                .then(response => response.json())
                .then(data => { this.setState({ data: data.results[0] }); console.log(data.results[0]) })
        }
    }


    render() {
        return (
            <div>
                <SearchBox executeFetch={this.executeFetch} setState={this.setState} locationName={this.state.locationName} />
                <LocationInfo data={this.state.data} />
                <ResidentContainer residentsArray={this.state.data.residents} />
            </div>
        )
    }
}

export default LocationContainer