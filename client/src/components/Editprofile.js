import React, { Component } from 'react';
import axios from 'axios';

class Editprofile extends Component {

  state = {
    title: '',
    description: '',
    image_url: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg',
    loading: false, 

  }

  // you can use for every input field
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  handleFileUpload = (e) => {
this.setState({
  loading: true, 
})
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    axios.post('/api/image', uploadData).then((resp) => {

      this.setState({
        loading:false, 
        image_url: resp.data.image_url
      })
    })

  }

  render() {
let spinner = "";
    if (this.state.loading === true) {
    this.state.image_url = "https://cdn.lowgif.com/full/ff8280aafe27319d-ajax-loading-gif-transparent-background-2-gif-images.gif";
  
  } else {};

    return (
      <div>
{spinner}

      <img src={this.state.image_url} height="100px" width="100px" alt="profile pic"></img>
        <input
          type="file"
          onChange={this.handleFileUpload} />
      </div>

    )
  }

}

export default Editprofile;