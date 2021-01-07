import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ShowItem extends React.Component{

  constructor(){
    super();
    this.DeleteShow = this.DeleteShow.bind(this);
  }
  //function for deleting show
  DeleteShow(e){
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/shows/"+this.props.show._id)
    .then()
    .catch();

  }

    render(){
        return(
            <div className="appDiv">
               

{/*Card for displaying the database*/ }
  <Card bg="dark" text="white" border="primary" >
  <Card.Img align="center" varient="top" src={this.props.show.Picture}></Card.Img>
  <Card.Header>{this.props.show.Name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <footer>
      {this.props.show.YearOfR}
      </footer>
    </blockquote>
  </Card.Body>
  <Button variant="danger" onClick={this.DeleteShow}>Delete</Button>
<Link to={"/edit/" + this.props.show._id} className="btn btn-primary">Edit</Link>
</Card>
            </div>
        )
    }
}
export default ShowItem;