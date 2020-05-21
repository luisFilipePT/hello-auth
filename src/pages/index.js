import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <Layout>
      <Link to="/dashboard">Go to the Dashboard</Link>
    </Layout>
  )
}

export default Index
