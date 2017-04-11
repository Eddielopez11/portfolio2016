import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      home: {
        aboutMe: "",
        contactInfo: {
          email: {
            href: "",
            info: ""
          },
          location: {
            href: "",
            info: ""
          },
          phone: {
            href: "",
            info: ""
          }
        },
        previousWork: {

        },
        social: {

        }
      }
    }
  },
  getDefaultProps() {
    return {
      previousWork: [
        {
          projectDescription: "Iron Bulldog was my final project for The Iron Yard. The idea was to have multiple gaming platforms in one place to sign in and see who is on in any of your linked profiles. As well as giving a snapshot of the gamer. To accomplish this, or as much as I did, I used 4 different APIs icluding googles oAuth to have the user sign in.",
          projectImg: "ironBulldog.png",
          projectName: "Iron Bulldog",
          projectURL: "https://iron-bulldog.herokuapp.com/"
        },
        {
          projectDescription: "Credit Card Validador was a shorter project that was early on into the course at The Iron Yard. It would varify name to see if the input was two words and longer than two characters each, a current date, a 3 number security code, and a valid credit card number of course!",
          projectImg: "ccValidator.png",
          projectName: "Credit Card Validator",
          projectURL: "https://eddielopez11-cc-validator.herokuapp.com/"
        },
        {
          projectDescription: "SA Tech Voices was a group project to represent a more real scenario with a 'client'. So the end picture changed according to our client everyday and what had to be done as well. SA Tech Voices is a demo blog sight for 'techie' individuals to blog and influence the poeple of San Antonio wanting to get into tech. This project is where I leaned oAuth, specifically with Google.",
          projectImg: "saTechVoices.png",
          projectName: "SA Tech Voices",
          projectURL: "https://san-antonio-tech-voices.surge.sh"
        }
      ],
      contactInfo: [
        {
          title: "location",
          info: "San Antonio / Austin",
          href: ""
        },
        {
          title: "phone",
          info: "(210) 330-5824",
          href: "tel:12103305824",
        },
        {
          title: "email",
          info: "eddielopez2101@gmail.com",
          href: "mailto:eddielopez2101@gmail.com"
        }
      ],
      contactInfoSocial: [
        {
          href: "https://www.linkedin.com/in/eddie-lopez-2101",
          fontAwesomeIcon: 'fa fa-linkedin-square fa-3x aria-hidden="true"'
        },
        {
          href: "https://github.com/Eddielopez11",
          fontAwesomeIcon: 'fa fa-github fa-3x aria-hidden="true"'
        }
      ],
      aboutMe: "Whatever it is that you are doing, take great pride in it. If anyone would ask me to write down the most important thing I’ve learned from my parents, it would be that. From cleaning your home to your everyday job or career they put their heart into it, and you can tell. The one person I admire the most would be my dad. As far as I can tell, he is the most hard working and loving individual, and never have I doubted that. If I can be just half as amazing as he is I know I can do great. My mission is to create beautiful, functional websites that will only get better as I grow as a developer."
    }
  },
  componentWillMount() {
    this.loadHome()
    console.log(this.state);
    console.log(this.loadHome());
  },
  loadHome() {
  firebase.database().ref("/").once("value").then((snapshot)=>{
    var snapshotReturn = snapshot.val()
    console.log(snapshot.val());
    this.setState({
      home: snapshotReturn,
      })
    })
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
          <div>
            <h2 className="intro--h1">Eduardo Lopez</h2>
            <h1 className="intro--h2">Front End Web Developer</h1>
          </div>
        </div>
        <div className="work">
          <h3 className="linkSpacer-header">
            <span id="work"
                  className="linkSpacer-span">
            </span>
          </h3>
          <h2 className="work__title">Check out some of my work below</h2>
          {
            this.props.previousWork.map((project, id)=>{
              return <section key={id} className="workSections"><h3>{project.projectName}</h3><a href={project.projectURL} target="_blank" className="projectsLink"><img className="projectImage" src={"../assets/" + project.projectImg} alt={"image of" + project.projectName}/></a><p>{project.projectDescription}</p></section>
            })
          }
        </div>
        <div className="about">
          <h3 className="linkSpacer-header">
            <span id="about"
                  className="linkSpacer-span">
            </span>
          </h3>
          <h3 className="aboutMeTitle">A little about myself...</h3>
          <div className="aboutWrapper">
            <p className="aboutMeP">{this.props.aboutMe}</p>
            <span className="aboutMeHeadshot"></span>
          </div>
        </div>
        <div className="contact">
          <ul className="contact__ul">
          {
            this.props.contactInfo.map((contactInfo, id)=>{
              return <li key={id} className="contact__li"><h4>{contactInfo.title}</h4><a href={contactInfo.href} className="contact__link">{contactInfo.info}</a></li>
            })
          }
          {
            this.props.contactInfoSocial.map((social, id)=>{
              return <li key={id} className="contact__fa"><a href={social.href} target="_blank" className="contact__link"><i className={social.fontAwesomeIcon}></i></a></li>
            })
          }
          </ul>
        </div>
      </div>
    )
  }
})
