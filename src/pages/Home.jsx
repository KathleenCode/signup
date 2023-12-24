import { Link, useLoaderData } from "react-router-dom";

export default function Home() {

  const posts = useLoaderData();
  console.log("data", posts);

  return (
    <>
    <p>Home</p>

    <div style={{ backgroundColor: "#7071E8", borderRadius: "1rem", padding: "1.5rem 3rem", margin: "1rem 5rem"}}>
    {
      posts.map((post) => (
        <Link key={post.id} to={post.id.toString()} style={{color: "#F6ECA9", textDecoration: "none"}}>
          <div style={{border: "1.7px solid #FF9EAA", marginBottom: "1rem", borderRadius: "1rem", padding: "1rem"}}>
           <p style={{color: "#072541"}}>Home: {post.title}</p>
           <p>Home: {post.body}</p>
          </div>
        </Link>
      ))
    }
    </div>
    </>
    )
  }
  



  // //class-based components
  // import React from "react";
  // class Home extends React.Component {
  //   render() {
  //     <div>Home</div>
  //   }
  // }
  
  // //Another class-based components
  // //class-based components
  // import { Component } from "react";
  // class Home extends Component {
  //   render() {
  //     <div>Home</div>
  //   }
  // }
