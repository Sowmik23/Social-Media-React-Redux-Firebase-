import React from 'react'
import ProjectSummary from './ProjectSummary';

import { Link, Redirect } from 'react-router-dom'


const ProjectList = ({projects}) => {

    // const auth = this.props
    // if(!auth.uid) return <Redirect to='/signin'/>
    return (
        <div className="project-list section">

            {/* <ProjectSummary/>

            <ProjectSummary/>

            <ProjectSummary/>

            <ProjectSummary/> */}

            { projects && projects.map( project => {
                
                return (
                    <Link to={'/project/' + project.id} key={project.id} >
                        <ProjectSummary project = { project }/>
                    </Link>
                )
            })}
       
        </div>
    )
}

export default ProjectList