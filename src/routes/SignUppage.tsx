import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUppage = () => {
  return (
    <SignUp signInUrl='signin'/>
  )
}

export default SignUppage