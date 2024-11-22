import React from 'react'
import Layout from '../Component/Layout/Layout'
import {Link} from 'react-router-dom'

import '../../src/Styles/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <h1> ChopNChat</h1>
          <p>Best food in lagos</p>
          <Link to='/menu'>
          
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home