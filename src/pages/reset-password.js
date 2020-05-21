import React from 'react'
import { navigate } from 'gatsby'
import { auth } from 'gatsby-theme-firebase'
import AuthForm from '../components/AuthForm'
import Layout from '../components/Layout'

const ResetPassword = () => {
  const handleSubmit = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email)
      alert('An email has been sent with instructions')
      navigate('/sign-in')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <Layout>
      <AuthForm
        handleSubmit={handleSubmit()}
        title="Reset Password"
        type="ResetPassword"
      />
    </Layout>
  )
}

export default ResetPassword
