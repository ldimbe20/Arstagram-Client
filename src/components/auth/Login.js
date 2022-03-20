import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { loginUser } from "./AuthManager"
import "./auth.css"

export const Login = ({ setToken }) => {
  const username = useRef()
  const password = useRef()
  const history = useHistory()
  const [isUnsuccessful, setisUnsuccessful] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user).then(res => {
      if ("valid" in res && res.valid) {
        console.log(res)
        setToken(res.token)
        history.push("/posts")
      }
      else {
        setisUnsuccessful(true)
      }
    })
  }

  return (
    <section className="columns is-centered">
      <form className="column is-two-thirds" onSubmit={handleLogin}>
        <h1 className="main-title">Login</h1>
        <p className="title is-4 mb">Please sign in</p>

        <div className="field">
          <label className="title is-5 mt-3 mb-1">Username</label>
          <div className="control">
            <input className="input is-primary" type="text" ref={username} />
          </div>
        </div>

        <div className="field">
          <label className="title is-5 mt-3 mb-1">Password</label>
          <div className="control">
            <input className="input is-primary" type="password" ref={password} />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary" type="submit" >Submit</button>
          </div>
          <div className="control">
            <Link to="/register" className="button is-primary is-outlined">Cancel</Link>
          </div>
        </div>
        {
          isUnsuccessful ? <p className="help is-danger">Username or password not valid</p> : ''
        }
      </form>
    </section>
  )
}
