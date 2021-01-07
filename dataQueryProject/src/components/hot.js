import React from 'react'
import Shows from './shows';
import axios from 'axios';


class Read extends React.Component{

    state = {
        shows: []
    };
    //getting the data from the series added by the user
    componentDidMount() {
        axios.get('http://localhost:4000/api/shows')
        .then((response)=>{
            this.setState({shows: response.data.shows})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <font color="white"><h1>What's hot</h1></font>
                <Shows myShows={this.state.shows}></Shows>
            </div>
        );
    }
}
export default Read;