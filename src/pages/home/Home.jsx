import React, { useEffect, useState } from "react"
import { Category } from "../../components/header/category/Category"
import { Card } from "../../components/header/blog/Card"
import { Link } from "react-router-dom"

export const Home = () => {
      const [posts, setPosts] = useState([])

  // Load posts from localStorage when Home mounts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || []
    setPosts(storedPosts)
  }, [])

    return (
    <>
    <Category />
    <Card />

    <section className="blog">
        <div className="container grid3">
          <h2>All Created Posts</h2>

          {posts.filter(post => post.title || post.content).length === 0 ? (
            <p>No posts yet.</p>
          ) : (
             posts
              .filter(post => post.title || post.content)
             .map((post, index) => (
              <div className="box boxItems" key={index}>
                <div className="img">
                  {post.file && <img src={post.file} alt="post" />}
                </div>
                <div className="details">
                  <div className="tag">
                    <a href="/">#{post.category}</a>
                  </div>

                 
                  <Link to={`/details/custom-${index}`} className="link">
                    <h3>{post.title}</h3>
                  </Link>

                  <p>{post.content}</p>
                  <div className="date">
                    <label>{post.date}</label>
                  </div>
                </div>
              </div>
             ))
            )}


        </div>
      </section>
    
    </>
    )

}