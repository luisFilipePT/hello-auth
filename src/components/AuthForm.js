import React, { useState } from 'react'

const AuthForm = ({ handleSubmit, handleGoogleLogin, title, type }) => {
  const [state, setState] = useState({ email: '', password: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(state.email, state.password)
  }

  return (
    <div>
      <h1 style={{ marginBottom: 25 }}>{title}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            required
            type="email"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        {type !== 'ResetPassword' && (
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              required
              type="password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
          </div>
        )}
        <button type="submit" style={{ float: 'right' }}>
          Submit
        </button>
      </form>
      {type === 'SignIn' && (
        <button
          style={{ marginTop: 30, width: '100%' }}
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </button>
      )}
    </div>
  )
}

export default AuthForm
