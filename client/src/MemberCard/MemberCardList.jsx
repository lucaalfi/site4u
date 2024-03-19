import React from 'react';
import axios from 'axios';

import MemberCard from "./MemberCard.jsx"

export default class MemberCardList extends React.Component{
    state = {
        members: []
      }

      componentDidMount() {
        axios.get("http://localhost:3001/members")
          .then(res => {
            const members = res.data;
            this.setState({ members });
          })
          .catch(e => {
            console.log(e);
          });     
      }

      render(){
        const membArr = this.state.members.members;
        var toReturn = [];

        let count=0;
        if(typeof(membArr)!="undefined"){
            membArr.forEach(i => {
            toReturn.push(
              <MemberCard name={i.name}
              imageSrc={i.imageSrc}
              description={i.description}
              position={i.position}
              linkedIn={(i.linkedIn!="")? i.linkedIn: null }
              instagram={(i.instagram!="")? i.instagram: null }
              key={"memberCard"+count}
              />
          )
          count+=1;
          });
        }

        return(
            <>
            {toReturn}
            </>
        )
      }


}
