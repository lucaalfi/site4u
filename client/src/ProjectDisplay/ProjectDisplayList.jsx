import React from 'react';
import axios from 'axios';

import styles from './ProjectDisplay.module.css';
import ProjectDisplay from './ProjectDisplay';
import PropTypes from 'prop-types';

export default class ProjectDisplayList extends React.Component{
    state = {
        projects: []
      }

      componentDidMount() {
        axios.get("http://localhost:3001/projects")
          .then(res => {
            const projects = res.data;
            this.setState({ projects });
          })
          .catch(e => {
            console.log(e);
          });
      }

      render(){
        const projArr = this.state.projects.projects;
        var toReturn = [];

        let count=0;
        if(typeof(projArr)!="undefined"){
          projArr.forEach(i => {
            toReturn.push(
              <ProjectDisplay name={i.name}
              imageSrc={i.imageSrc}
              description={i.description}
              projectLink={i.projectLink}
              key={"projDisp"+count}
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

