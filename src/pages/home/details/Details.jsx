import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { blog } from "../../../assets/data/data"
import "./details.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"

export const Details = () => {
  const { id } = useParams()
  const history = useHistory() // For navigation
  const [post, setPost] = useState(null)
  const [index, setIndex] = useState(null) // Index for custom posts

  useEffect(() => {
    if (id.startsWith("custom-")) {
      // 🔹 Custom post from localStorage
      const idx = parseInt(id.split("-")[1], 10)
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || []
      if (storedPosts[idx]) {
        setPost(storedPosts[idx])
        setIndex(idx)
      }
    } else {
      // 🔹 Default blog post
      const foundPost = blog.find((b) => b.id === parseInt(id))
      if (foundPost) {
        setPost(foundPost)
      }
    }
  }, [id])

  if (!post) return <p>Post not found ❌</p>

  // 🔹 Delete post
  const handleDelete = () => {
    if (id.startsWith("custom-")) {
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || []
      storedPosts.splice(index, 1) // Remove the post
      localStorage.setItem("posts", JSON.stringify(storedPosts))
      alert("Post deleted successfully ✅")
      history.push("/") // Redirect to home
    } else {
      alert("Cannot delete default blog post ❌")
    }
  }

  // 🔹 Edit post (template)
  const handleEdit = () => {
    if (id.startsWith("custom-")) {
      history.push(`/create?edit=${index}`) // Pass index to prefill form
    } else {
      alert("Cannot edit default blog post ❌")
    }
  }

  return (
    <section className="singlePost">
      <div className="container">
        <div className="left">
          {post.file ? (
            <img src={post.file} alt={post.title} />
          ) : (
            <img src={post.cover} alt={post.title} />
          )}
        </div>
        <div className="right">
          <div className="buttons">
            <button className="button" onClick={handleEdit}>
              <BsPencilSquare />
            </button>
            <button className="button" onClick={handleDelete}>
              <AiOutlineDelete />
            </button>
          </div>
          <h1>{post.title}</h1>
          <p><b>Category:</b> {post.category}</p>
          <p><b>Date:</b> {post.date}</p>
          <p>{post.content || post.desc}</p>
        </div>
      </div>
    </section>
  )
}
