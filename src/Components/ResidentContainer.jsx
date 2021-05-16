import React from "react"
import ResidentInfo from "./ResidentInfo"

class ResidentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allResidents: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.residentsArray !== prevProps.residentsArray) {
            console.log(prevProps.residentsArray)
            console.log(this.props.residentsArray)
            const residentsUrl = this.props.residentsArray
            const residentsArray = [];
            for (let i = 0; i < residentsUrl.length; i++) {
                fetch(`${residentsUrl[i]}`)
                    .then(response => response.json())
                    .then(data => this.changeState(data, residentsArray))
            }
        }
    }

    changeState(data, residentsArray) {
        residentsArray.push(data)
        this.setState({ allResidents: residentsArray })
        console.log(residentsArray.length)
    }

    render() {
        return (
            < div >
                {
                    this.props.residentsArray ?
                        this.props.residentsArray.length > 0 ?
                            <ul>
                                {this.state.allResidents.map(item => (
                                    /* this.setState({ residentsLength: this.props.residentsArray.length }), */
                                    <ResidentInfo
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        status={item.status}
                                        species={item.species}
                                        location={item.location.name}
                                        episodes={item.episode.length} episodes
                                    />
                                ))}
                            </ul>
                            :
                            <div> No residents in this location </div>
                        :
                        <div></div>
                }


            </div >
        )
    }
}

export default ResidentContainer