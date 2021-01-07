import React from 'react';
import ShowItem from './showitem';

class Shows extends React.Component{

    render(){
        return this.props.myShows.map((show)=>{
            return <ShowItem key={show._id} show={show}></ShowItem>
        });
    }
}
export default Shows;