import React from 'react'
import "./Blog.css"
import blogimg from "../../Assets/blogimg.png"

const Blog = () => {
  return (
    <>
      <div className='blog'>
        <div className='blog_head'>
            <div className='blog_left'>
                <img src={blogimg} alt="" />

            </div>
            <div className='blog_right'>
                <h2>About The <span>Blueberry</span></h2>
                <p>Farm-fresh Goodness, just a click Away.</p>

            </div>

        </div>

      </div>
    </>
  )
}

export default Blog
