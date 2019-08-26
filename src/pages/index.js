import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe/aboutMe"
import Project from "../components/projects/projects"
import Contact from "../components/contact"
import Experience from "../components/experience"

const IndexPage = () => (
  <Layout>
    <SEO title="Paweł Kozubek portfolio" />
    <AboutMe />
    <Experience />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
