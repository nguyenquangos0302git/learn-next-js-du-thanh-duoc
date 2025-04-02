'use client'

import { useState } from "react"

export const LoginPage = () => {
  const [email, setEmail] = useState("test@gmail.com")
  return (
    <div>Login Page {email}</div>
  )
}

export default LoginPage