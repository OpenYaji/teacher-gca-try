import React from 'react'
import Header from './loginHeader'
import Login from './login'
const LoginPage = () => {
  return (
    <>
      <Header />
      <main className=''>
        <section id="home">
          <Login />
        </section>
      </main>
    </>

  )
}

export default LoginPage