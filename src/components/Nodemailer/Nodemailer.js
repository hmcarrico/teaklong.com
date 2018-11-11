import React, { Component } from 'react';
import axios from 'axios';

class Nodemailer extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      axios.post('/send', {
              name: name,   
              email: email,  
              message: message
      }).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
  }

  resetForm = () => {
    document.getElementById('contact-form').reset();
}

  render() {
    return (
        <div className='mail'>
        <h2>Contact Support Team</h2>
        <form id="contact-form" method="POST">
          <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" rows="5" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Nodemailer;