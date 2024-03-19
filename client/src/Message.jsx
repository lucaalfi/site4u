import React from 'react';
import axios from 'axios';

export default class Message extends React.Component {
    state = {
      response: ""
    }
  
    componentDidMount() {
      axios.get("http://localhost:3001/api")
        .then(res => {
          const response = res.data;
          this.setState({ response });
        })
    }
  
    render() {
      console.log(this.state.response);
      return (
        <h1> {this.state.response.message}</h1>
      )
    }
  }