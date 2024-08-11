import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import foodimg from "../assets/foodimg.jpg"
import "../styles/HomeStyle.css"
const Home = () => {
  return (
    <Layout>
      <div className="Home" style={{backgroundImage:`url(${foodimg})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
          <button>
            Order Now
          </button>
          </Link>
        
        </div>
      </div>
    </Layout>
  )
} 

export default Home