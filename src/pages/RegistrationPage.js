import '../styles/Register.css'
import '../styles/RegistrationPage.css'
import '../pages/HomePage'
import { useDatabase } from '../hooks'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect, Route } from "react-router";

export const RegistrationPage = () => {
  const [state, dispatch] = useDatabase()
  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')



  

    const register = e =>{
      //e.preventDefault()
  
    }

    return (
      <div className="RegistrationPage">
        <div className="Register">
          <form>
            <h1>Create an account</h1>
            {state.errorMessage && <h3>{state.errorMessage}</h3>}
            <h5>Username</h5>
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
  
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <h5>Re-Enter Password</h5>
            <input
              type="password"
              placeholder="Re-Enter Password"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
  
            <button
              onClick={() =>
                register
              }
              register
              className="Register_Button"
            >
              Create
            </button>
          </form>
          <p>
            Already have an account?
            <Link to="/account">Sign In</Link>
          </p>
        </div>
      </div>
    )
  }
