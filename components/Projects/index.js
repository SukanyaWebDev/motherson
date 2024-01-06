import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

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

        <h1 className="project-heading">Projects</h1>
        {projects.map(eachProject => (
          <ProjectsView key={eachProject.id} projectDetails={eachProject} />
        ))}
      </div>
    )
  }
}

export default Projects
