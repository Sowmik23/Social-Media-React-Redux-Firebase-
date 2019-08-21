import React from 'react'

const ProjectDetails = (props) =>{

    //console.log(props)

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>You'll notice that there are two sets
                         of the files. The min means that the
                          file is "compressed" to reduce load 
                          times. These minified files are usually 
                          used in production while it is better to
                           use the unminified files during development.
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>12 September, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
