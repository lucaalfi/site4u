import React from 'react';
import axios from 'axios';

export default class MemberTemp extends React.Component {
    state = {
      member: {}
    }
  
    componentDidMount() {
      axios.get("http://localhost:3001/member")
        .then(res => {
          const member = res.data;
          this.setState({ member });
        })
    }
  
    render() {
      return (
        <>
        <h1>{this.state.member.name}</h1>
        <h5>{this.state.member.imageSrc}</h5>
        <h5>{this.state.member.description}</h5>
        <h5>{this.state.member.position}</h5>
        <h5>{this.state.member.linkedIn}</h5>
        <h5>{this.state.member.instagram}</h5>
        </>
      )
    }
  }