import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe/aboutMe"
import Project from "../components/projects/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO />
    <AboutMe />
    <AboutMe />
    <AboutMe />
    <AboutMe />
    <Project />
    <Contact />
  </Layout>
)

export default IndexPage
