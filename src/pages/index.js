import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe/aboutMe"
import Project from "../components/projects/projects"

const IndexPage = () => (
  <Layout>
    <AboutMe />
    <AboutMe />
    <AboutMe />
    <AboutMe />
    <Project />
  </Layout>
)

export default IndexPage
