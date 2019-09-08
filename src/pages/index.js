import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe/aboutMe"
import Project from "../components/projects/projects"
import Contact from "../components/contact"
import Experience from "../components/experience/experience"
import Education from "../components/education/education"

class IndexPage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      once: true,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Paweł Kozubek portfolio" />
        <AboutMe />
        <Experience />
        <Education />
        <Project />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
