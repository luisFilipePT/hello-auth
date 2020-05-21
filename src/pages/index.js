import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout>
      <h2>Log in to find out why.</h2>
      <Link to="/dashboard">Go to the Dashboard</Link>
      <div style={{ padding: 30 }}>
        <Link to="/sign-up">Sign Up</Link>
        <span style={{ paddingLeft: 10, paddingRight: 10 }}>OR</span>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </Layout>
  )
}

export default Index
