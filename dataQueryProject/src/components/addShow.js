import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class addShow extends React.Component {
  constructor(props){
    super(props);
//aspects of each show 
    this.state = {Name:'',
                  YearOfR:'',//year of release
                Picture:'',
              Base64Image:''};// for the choosing of the file for image

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleYearOfRChange = this.handleYearOfRChange.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }
  //functions for adding to database
  handleNameChange(e){
    this.setState({Name: e.target.value});
  }

  handleYearOfRChange(e){
    this.setState({YearOfR: e.target.value});
  }

  handlePicture(e){
    this.setState({Picture: e.target.value});
  }
  // file upload/read
  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
//handling of the base64image choose file option
  handleImageChange(e){
    alert(e.target.files[0]);
    this.getBase64(e.target.files[0], (base64) =>{
        this.setState({Base64Image:base64});
    })
  }

  handleSubmit(e){
    alert(this.state.Name+ "      " + this.state.YearOfR 
    +"       "+ this.state.Picture);
    e.preventDefault();
    
    const newShow = {
                  Name: this.state.Name,
                  YearOfR: this.state.YearOfR,
                  Picture: this.state.Picture
                };
          axios.post('http://localhost:4000/api/shows',newShow) 
          .then()
          .catch();
          

          this.setState({Name:'',
                  YearOfR:'',
                Picture:''});    
  }

  render() {
    return (
      <div>
        <font color="white"><label><h1>Add a show to the What's New section</h1></label></font> 
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
        <font color="white"><label>Show Name</label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.Name}
          onChange={this.handleNameChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="white"><label>Show Year Of Release</label></font>
          <input
          type='text'
          className='form-control'
          value={this.state.YearOfR}
          onChange={this.handleYearOfRChange}
          ></input>
        </div>
        <div className='form-group'>
        <font color="white"><label>Show Picture Url</label></font>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Picture}
          onChange={this.handlePicture}
          ></textarea>
        </div>
        <div>
          <font color="white"><label>Upload Picture From Your PC</label></font>
          <input
          type='file'
          className='form-control'
          onChange={this.handleImageChange}
          ></input>

        </div>
        <div>
          <input
          type="submit"
          value="Add Show">
          </input>
        </div>
        </form>
        
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      
    );
  }
}

export default addShow;