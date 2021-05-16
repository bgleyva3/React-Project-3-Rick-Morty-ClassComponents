import React from "react"
import ResidentInfo from "./ResidentInfo"

class ResidentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allResidents: [],
            allResidentsRender: []
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
        if (this.state.allResidents !== prevState.allResidents) {
            console.log(prevState.allResidents)
            console.log(this.state.allResidents)
            console.log(typeof (this.state.allResidents))
            const varAllResidents = this.state.allResidents
            console.log(varAllResidents)
            console.log(typeof (varAllResidents))
            const mapAllResidents = varAllResidents.forEach(item => item.id)
            this.setState({ allResidents: varAllResidents })
            console.log(mapAllResidents)
        }
    }

    changeState(data, residentsArray) {
        residentsArray.push(data)
        this.setState({ allResidents: residentsArray })
    }

    render() {
        return (
            < div >
                {
                    this.props.residentsArray ?
                        this.props.residentsArray.length > 0 ?
                            <ul>
                                {this.state.allResidents.map(item => (
                                    <ResidentInfo
                                        id={item.id}
                                        image={item.image}
                                        name={item.name}
                                        status={item.status}
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