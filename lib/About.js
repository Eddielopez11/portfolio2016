import React from 'react'

export default React.createClass({
  getDefaultProps() {
    return {
      previousWork: [
        {
          projectDescription: "Iron Bulldog Final Project...",
          projectImg: "ironBulldog.png",
          projectName: "Iron Bulldog",
          projectURL: "https://iron-bulldog.herokuapp.com/"
        },
        {
          projectDescription: "Credit Card Validador short project...",
          projectImg: "ccValidator.png",
          projectName: "Credit Card Validator",
          projectURL: "https://eddielopez11-cc-validator.herokuapp.com/"
        },
        {
          projectDescription: "SA Tech Voices group project...",
          projectImg: "saTechVoices.png",
          projectName: "SA Tech Voices",
          projectURL: "https://san-antonio-tech-voices.surge.sh"
        }
      ]
    }
  },
  render() {
    return (
      <div className="contentWrapper">
        <div className="intro">
          <h3 className="linkSpacer-header">
            <span id="intro"
                  className="linkSpacer-span">
            </span>
          </h3>
          <h2 className="intro--h1">Eduardo Lopez</h2>
          <h1 className="intro--h2">Front End Web Developer</h1>
        </div>
        <div className="work">
          <h3 className="linkSpacer-header">
            <span id="work"
                  className="linkSpacer-span">
            </span>
          </h3>
          {
            this.props.previousWork.map((project, id)=>{
              return <section key={id}><h3>{project.Name}</h3><p>{project.projectDescription}</p><img className="projectImage" src={"../assets/" + project.projectImg} alt={"image of" + project.projectName}/><a href={project.projectURL} target="_blank">Check out Website</a></section>
            })
          }
        </div>
        <div className="about">
          <h3 className="linkSpacer-header">
            <span id="about"
                  className="linkSpacer-span">
            </span>
          </h3>
        </div>
        <div className="contact">
          <h3 id="contact"></h3>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          <i className="fa fa-github" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
})
