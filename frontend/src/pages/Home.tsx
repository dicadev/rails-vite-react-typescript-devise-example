import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'CSRF-TOKEN'
axios.defaults.xsrfHeaderName = 'X-CSRF-Token'
axios.defaults.withCredentials = true

const Home: React.FC = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/session')
  }, [])

  const onSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault()
      console.log('submit')

      const target = e.target as typeof e.target & {
        email: { value: string }
        password: { value: string }
      }

      const { data } = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email: target.email.value,
          password: target.password.value,
          remember_me: 0
        }
      })

      window.alert('Sign in successful')
    } catch (err) {
      window.alert('Sign in failed!')
    }
  }

  // This will always cause an error with this code,
  // but we will be signed out so ignore the error.
  const onSignOut = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await axios.delete('http://localhost:3000/users/sign_out')
    } catch (e) {
      window.alert('Signed out!')
    }
  }

  const testEndpoint = async () => {
    try {
      const { data } = await axios.post('http://localhost:3000/home')
      window.alert(JSON.stringify(data))
    } catch (e) {
      window.alert((e as Error).message)
    }
  }

  return (
    <div>
      <main>
        <form onSubmit={onSubmit}>
          <div>
            <input name="email" type="text" placeholder="Email" />
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" />
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
        </form>
        <button onClick={onSignOut}>Sign out</button>
        <button onClick={testEndpoint}>Test Endpoint</button>

        <Link href="/another">Go to /another</Link>
      </main>
    </div>
  )
}

export default Home
