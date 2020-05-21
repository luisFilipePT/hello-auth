import React from 'react'
import { Link } from 'gatsby'
import { auth, useAuth } from 'gatsby-theme-firebase'
import Layout from '../components/Layout'

const Dashboard = () => {
  const { isLoading, isLoggedIn, profile } = useAuth()

  if (isLoading) return <h1>Loading...</h1>

  if (!isLoggedIn) {
    return (
      <Layout>
        <h2>Dashboard</h2>
        <h3>You need to be logged to see this page content</h3>
        <Link to="/">Sign In or Sign Up first</Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <h2>Dashboard</h2>
      {profile && <h3>Hello {profile.displayName || profile.email}!</h3>}
      {isLoggedIn && <button onClick={() => auth.signOut()}>Sign Out</button>}
    </Layout>
  )
}

export default Dashboard
