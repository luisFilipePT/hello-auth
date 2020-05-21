import React from 'react'
import { Link, navigate } from 'gatsby'
import { auth, googleProvider } from 'gatsby-theme-firebase'
import AuthForm from '../components/AuthForm'
import Layout from '../components/Layout'

const SignIn = () => {
  const handleSubmit = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      navigate('/dashboard')
    } catch (e) {
      alert(e.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(googleProvider())
      navigate('/dashboard')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <Layout>
      <AuthForm
        handleSubmit={handleSubmit}
        handleGoogleLogin={handleGoogleLogin}
        title="Sign In"
        type="SignIn"
      />
      <br />
      <Link to="/reset-password">Forgot Password</Link>
    </Layout>
  )
}

export default SignIn
