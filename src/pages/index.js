import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to My Gatsby Site</h1>
      <p>This is the Home page.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Tripti’s Gatsby Blog – Home" />
