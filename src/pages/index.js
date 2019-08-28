import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe/aboutMe"
import Project from "../components/projects/projects"
import Contact from "../components/contact"
import Experience from "../components/experience"

class IndexPage extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Paweł Kozubek portfolio" />
        <div data-aos="fade-in">
          <AboutMe />
        </div>

        <Experience data-aos="fade-up" />
        <Project data-aos="fade-up" />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
