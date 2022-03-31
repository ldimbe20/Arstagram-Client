import React, { useRef } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"

export const Register = ({ setToken }) => {
	const firstName = useRef()
	const lastName = useRef()
	const email = useRef()
	const username = useRef()
	const bio = useRef()
	const password = useRef()
	const verifyPassword = useRef()
	const passwordDialog = useRef()
	const history = useHistory()

	const handleRegister = (e) => {
		e.preventDefault()

		if (password.current.value === verifyPassword.current.value) {
			const newUser = {
				username: username.current.value,
				first_name: firstName.current.value,
				last_name: lastName.current.value,
				email: email.current.value,
				password: password.current.value,
				bio: bio.current.value,
			}

			registerUser(newUser).then((res) => {
				// if ("valid" in res && res.valid) 
				{
					setToken(res.token)
					history.push("/posts")
				}
			})
		} else {
			passwordDialog.current.showModal()
		}
	}
	
	



	return (
		<section className='columns is-centered'>
			<form className='column is-two-thirds' onSubmit={handleRegister}>
				<h1 className='main-title'>Registration</h1>
				<p className='title is-4 mb'>Create an account</p>
				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>First Name</label>
					<div className='control'>
						<input className='input is-primary' type='text' ref={firstName} />
					</div>
				</div>

				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>Last Name</label>
					<div className='control'>
						<input className='input is-primary' type='text' ref={lastName} />
					</div>
				</div>

				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>Username</label>
					<div className='control'>
						<input className='input is-primary' type='text' ref={username} />
					</div>
				</div>

				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>Email</label>
					<div className='control'>
						<input className='input is-primary' type='email' ref={email} />
					</div>
				</div>

				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>Password</label>
					<div className='field-body'>
						<div className='field'>
							<p className='control is-primary'>
								<input
									className='input is-primary'
									type='password'
									placeholder='Password'
									ref={password}
								/>
							</p>
						</div>

						<div className='field'>
							<p className='control is-primary'>
								<input
									className='input is-primary'
									type='password'
									placeholder='Verify Password'
									ref={verifyPassword}
								/>
							</p>
						</div>
					</div>
				</div>

				<div className='field'>
					<label className='title is-5 mt-3 mb-1'>Bio</label>
					<div className='control'>
						<textarea
							className='textarea is-primary'
							placeholder='Tell us about yourself...'
							ref={bio}></textarea>
					</div>
				</div>

				<div className='field is-grouped'>
					<div className='control'>
						<button className='button is-primary' type='submit'>
							Submit
						</button>
					</div>


				
					<div className='control'>
						<Link to='/login' className='button is-dark'>
							Cancel
						</Link>

					</div>
				</div>
			</form>
		</section>
	)
}
