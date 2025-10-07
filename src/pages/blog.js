import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"  // ✅ Add this line


const BlogPage = () => {
  // GraphQL query to fetch markdown data
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1> My Blog Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "2rem" }}>
            <h2>{post.frontmatter.title}</h2>
            <p><em>{post.frontmatter.date}</em></p>
            <p>{post.excerpt}</p>
            <hr />
          </li>
        ))}
               {/* // Example of using StaticImage */}
            <StaticImage
        src="../images/blog.png"
        alt="Example"
        placeholder="blurred"
        width={600}
      />
      </ul>
      
    </main>
  )
}

export default BlogPage
