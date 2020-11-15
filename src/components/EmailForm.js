import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS", message: 'Thank you!' });
        setTimeout(() => {
          this.setState({ message: '' });
        }, 3000);
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="POST" action="https://formspree.io/f/xgepzyje">
        <input type="text" name="_replyto" placeholder="Stay tunned with your email" />
        {/* <input type="text" name="_gotcha" style="display:none" /> */}
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
