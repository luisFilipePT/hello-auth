import React from 'react'
import { Link, navigate } from 'gatsby'
import { auth } from 'gatsby-theme-firebase'
import AuthForm from '../components/AuthForm'
import Layout from '../components/Layout'

const SignUp = () => {
  const handleSubmit = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      navigate('/dashboard')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <Layout>
      <AuthForm handleSubmit={handleSubmit} title="Sign Up" type="SignUp" />
      <br />
      <div>
        You can also just sign in with a Google Account{' '}
        <Link to="/sign-in">here</Link>
      </div>
    </Layout>
  )
}

export default SignUp
