const ProjectsView = props => {
  const {projectDetails} = props

  return (
    <div className="other-component">
      <h3>Project Details</h3>
      <p>ID: {projectDetails.id}</p>
      <p>Name: {projectDetails.projectName}</p>
      <p>Link: {projectDetails.projectLink}</p>
      <p>Description: {projectDetails.projectDescription}</p>
    </div>
  )
}

export default ProjectsView
