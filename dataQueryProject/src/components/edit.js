import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
  constructor(props) {
    super(props);
//the edit series section to update the newest addition to the hot.js page


    this.state = {
      Name: '',
      YearOfR: '',
      Picture: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleYearOfRChange = this.handleYearOfRChange.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/shows/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Name: response.data.Name,
          YearOfR: response.data.YearOfR,
          Picture: response.data.Picture
        })
      })
      .catch();


  }
  //edit functions for Name , YearOfR and Picture
  handleNameChange(e) {
    this.setState({ Name: e.target.value });
  }

  handleYearOfRChange(e) {
    this.setState({ YearOfR: e.target.value });
  }

  handlePicture(e) {
    this.setState({ Picture: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Name + "      " + this.state.YearOfR
      + "       " + this.state.Picture);
    e.preventDefault();

    const newShow = {
      Name: this.state.Name,
      YearOfR: this.state.YearOfR,
      Picture: this.state.Picture
    };

    axios.put('http://localhost:4000/api/shows/' + this.state._id,
      newShow)
      .then()
      .catch();


    this.setState({
      Name: '',
      YearOfR: '',
      Picture: ''
    });
  }


  render() {
    return (
      <div>
        <h1>Edit component</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Show Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Show Year of Release </label>
            <input
              type='text'
              className='form-control'
              value={this.state.YearOfR}
              onChange={this.handleYearOfRChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Show Picture Url</label>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Picture}
              onChange={this.handlePicture}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Edit Show">
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;