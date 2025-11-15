import { SignIn } from "@clerk/clerk-react"

const SignInpage = () => {
  return (
    <SignIn signUpUrl="/signup"/>
  )
}

export default SignInpage