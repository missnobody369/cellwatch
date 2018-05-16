import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class Broadband extends Component {

  constructor() {
      super();
      this.state = {
        broadband: [],
        modalIsOpen: false,
        caption: '',
        description: '',
        imageupload: '',
        id: 0
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal(broadband,id) {

  
    this.setState({
        modalIsOpen: true,
        caption: broadband.caption,
        description: broadband.description,
        imageupload: broadband.imageupload,
        id:id
    });
  }

  closeModal() {
    this.setState({
        modalIsOpen: false
    });
  }

  logChange = (e) => {
    console.log(e.target.value)
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  componentDidMount(){
      const $this = this;

      axios.get('http://localhost:3001/api/selectbroadband')
          .then(function (response) {
          $this.setState({broadband:response.data})
          console.log(response.data);
          })
          .catch(function (error) {
          console.log(error);
          });
    }

  updateCustomer = (e) => {
    e.preventDefault()
    const self = this
    axios.post('http://localhost:3001/updatebroadband', {
        caption: self.state.caption,
        description: self.state.description,
        imageupload: self.state.imageupload,
        id:self.state.id
      })
      .then(function (response) {
        console.log(response);
        if(response.statusText === "OK"){
          window.location.reload()
        }else{
          alert(`something's wrong`)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    let broadband_rows = [];
      this.state.broadband.map((broadband, i) => 
        broadband_rows.push(
          <div className="col-md-12" key={i}>
            <h4>{broadband.caption}</h4>
            <img className="img-responsive" src={'../public/imguploaded/broadband/'+broadband.imageupload} alt="not working"/>
            <p>{broadband.description}</p>
            <a onClick={() => this.openModal(broadband, broadband.id)}>Edit</a>
             <hr/>
          </div>
        )
      );
      return (
        <div>
          {broadband_rows}
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal" >
              <form onSubmit={this.updateCustomer}>
                  <label>Caption</label>
                  <input onChange={this.logChange} className="form-control" value={this.state.caption} name='caption' validations={['required']}/>
                  <label>Description</label>
                  <input onChange={this.logChange} className="form-control" value={this.state.description} name='description' validations={['required']}/>
                  {/*<input type="file" onChange={this.logChange} className="form-control" value={this.state.imageupload} id="imageupload" src={'/imguploaded/broadband/'+broadband.imageupload} name='imageupload' validations={['required']}/>*/}
                  <div className="submit-section">
                  <button className="btn btn-uth-submit" type="submit">Submit</button>
                  </div>
              </form>
          </Modal>
        </div>
    );
  }
}

export default Broadband;