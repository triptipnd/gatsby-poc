import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This is my Gatsby POC project.</p>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}
export const Head = () => <Seo title="Tripti’s Gatsby Blog – Home" />
