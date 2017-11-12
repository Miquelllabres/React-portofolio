import React , { Component }from 'react'
import $ from 'jquery'; 

class ReactFormLabel extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}
class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  
  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };
  
  handleSubmit = (e, message) => {
    e.preventDefault();

    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }
    
    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }

    $.ajax({
      url: 'mailer.php',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thank you for your message. Can I erase the form?')) {
          document.querySelector('.form-input').val('');
        }
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('There was some problem with sending your message.');
      }
    });
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  render() {
    return(
      <div className="magictime slideLeftReturn">
      <div className="jumbotron jumbotron-sm">
    <div className="container">
        <div className="row">
            <div clasNames="col-sm-12 col-lg-12">
                <h1 clasNames="h1">
                    Let,s Talk <small>Feel free to contact me</small></h1>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="well well-sm">
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="formName">
                                Name</label>
                            <input type="text" className="form-control" id="formName" name="name"  placeholder="Enter name" ref='formName' required onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formEmail">
                                Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                 <input id='formEmail' className='form-control' name='email' type='email' required onChange={this.handleChange} value={this.state.email} /></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formSubject">
                                Subject</label>
                             <input id='formSubject' className='form-control' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="formMessage">
                                Message</label>
                            <textarea name="message" id="formMessage" className="form-control" rows="9" cols="25" required onChange={this.handleChange}
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" id="formButton">
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div className="col-md-4">
            <form>
            <legend><span className="glyphicon glyphicon-globe"></span> Toronto based</legend>
            <address>
                
                    <i className="fa fa-phone" />
                <span> (647) 839-8961</span>
            </address>
            <address>
                <strong>Miquel Llabres Riera</strong><br/>
                <i className="fa fa-envelope" /><a href="mailto:#"> miquel@miquelllabres.com</a>
            </address>
            </form>
        </div>
    </div>
</div>
</div>

    )
  }
};

export default Contact;