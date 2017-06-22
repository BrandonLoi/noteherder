import React from 'react'

import './SignIn.css'
import { auth, githubProvider, googleProvider } from './base'

const SignIn = () => {
  const authenticate = (provider) => {
    auth.signInWithPopup(provider)
  }

  return (
    <div>
      <button
        className="SignIn color-change-5x"
        onClick={() => authenticate(githubProvider)}
      >
        Sign In With GitHub
      </button>
      <button
        className="SignIn color-change-5x"
        onClick={() => authenticate(googleProvider)}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
