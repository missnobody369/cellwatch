import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class Broadband extends Component {

  constructor() {
      super();
      this.state = {
        broadband: [],
        modalIsOpen: false,
        captionbroadband: '',
        descriptionbroadband: '',
        imagebroadband: '',
        id: 0
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
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

  updateBroadband = (e) => {
    e.preventDefault()

    const self = this
    axios.post('http://localhost:3001/api/updatebroadband', {
        captionbroadband: self.state.captionbroadband,
        descriptionbroadband: self.state.descriptionbroadband,
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

  openModal(broadband,id) {
    this.setState({
        modalIsOpen: true,
        captionbroadband: broadband.captionbroadband,
        descriptionbroadband: broadband.descriptionbroadband,
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


  render() {
    let broadband_rows = [];
      this.state.broadband.map((broadband, i) =>
        broadband_rows.push(
          <div className="col-md-12" key={i}>
            <h4>{broadband.captionbroadband}</h4>
            <img className="img-responsive" src={'/imguploaded/'+broadband.imagebroadband} alt="CELLWATCH"/>
            <p>{broadband.descriptionbroadband}</p>
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
              contentLabel="Edit Broadband" >
              <form onSubmit={this.updateBroadband}>
                  <label>Caption</label>
                  <input onChange={this.logChange} className="form-control" value={this.state.captionbroadband} name='captionbroadband' validations={['required']}/>
                  <label>Description</label>
                  <input onChange={this.logChange} className="form-control" value={this.state.descriptionbroadband} name='descriptionbroadband' validations={['required']}/>

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
