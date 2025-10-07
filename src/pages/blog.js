import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <h1> Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <h2>
                <Link to={post.frontmatter.slug}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p> {post.frontmatter.date}</p>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blog posts found.</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage
