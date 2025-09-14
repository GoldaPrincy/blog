import React, { useState } from "react"
import "./create.css"

export const Create = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState(null)

  // Convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  const handleSubmit = async (e) => {
    e.preventDefault()

    let fileBase64 = null
    if (file) {
      fileBase64 = await toBase64(file)   // convert to Base64 string
    }

    const newPost = {
      title,
      category,
      date,
      content,
      file: fileBase64,   // save Base64 instead of blob
    }
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || []
    existingPosts.push(newPost)
    localStorage.setItem("posts", JSON.stringify(existingPosts))

    console.log("Post created:", newPost)
    alert("Post Created Successfully ✅")

    setTitle("")
    setCategory("")
    setDate("")
    setContent("")
    setFile(null)
  
  }
  return(
    <>
    <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.pexels.com/photos/31215331/pexels-photo-31215331.jpeg' alt='image' class='image-preview' />
          </div>
          <form  onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <input type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />

            <input type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)} />

            
            <input type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} />

            <textarea placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}></textarea>

            <button type="submit" className='button'>Create Post</button>
          </form>
        </div>
      </section>
    </>
  )
    

}
