import {v4 as uuidv4, Component} from 'react'

import ProjectsView from '../ProjectsView'

import './index.css'

class Projects extends Component {
  state = {
    projectName: '',
    projectLink: '',
    projectDescription: '',
    projects: [],
  }

  onChangeName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeLink = event => {
    this.setState({projectLink: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({projectDescription: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {projectName, projectLink, projectDescription} = this.state

    const newProject = {
      id: uuidv4(),
      projectName,
      projectLink,
      projectDescription,
    }

    this.setState(prevState => ({
      projects: [...prevState.projects, newProject],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  render() {
    const {projectName, projectLink, projectDescription, projects} = this.state
    console.log(projectName)

    return (
      <div className="main-container">
        <h2>Add Projects</h2>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="input-container">
            <label htmlFor="projectName">Project Name </label>
            <input
              type="text"
              name="projectName"
              value={projectName}
              onChange={this.onChangeName}
              id="projectName"
            />
          </div>
          <div className="input-container">
            <label htmlFor="projectLink">Project Link </label>
            <input
              type="text"
              name="projectLink"
              value={projectLink}
              onChange={this.onChangeLink}
              id="projectLink"
            />
          </div>
          <div className="input-container">
            <label htmlFor="projectDescription">Project Description </label>
            <textarea
              name="projectDescription"
              value={projectDescription}
              onChange={this.onChangeDescription}
              id="projectDescription"
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="add-btn">
              Add
            </button>
          </div>
        </form>
        {projects.map(eachContact => (
          <ProjectsView key={eachContact.id} contactDetails={eachContact} />
        ))}
      </div>
    )
  }
}

export default Projects
