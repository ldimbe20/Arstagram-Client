import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken }) => {
	const history = useHistory()
	const navbar = useRef()
	const hamburger = useRef()

	const showMobileNavbar = () => {
		hamburger.current.classList.toggle("is-active")
		navbar.current.classList.toggle("is-active")
	}

	return (




		<nav
			className='navbar is-dark mb-5'
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				{/* <a className='navbar-item' href='/'>
				</a> */}


				<a
					role='button'
					className='navbar-burger'
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'
					onClick={showMobileNavbar}
					ref={hamburger}>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>
			<div className='navbar-brand' ref={navbar}>Sketchbook</div>

			<div className='navbar-end' ref={navbar}>
				<div className='navbar-start'>
					{token ? (
						<>  
							<Link to='/posts' className='navbar-item'>
								Shared Posts
							</Link>
							<Link to='/private_posts' className='navbar-item'>
								Private Posts
							</Link>
							<Link to='/createPost' className='navbar-item'>
								Create New Post
							</Link>
							<Link
								to='/mediums'
								className='navbar-item'>
								Material Manager
							</Link>
							<Link to='/resources' className='navbar-item'>
								Art Resources
							</Link>

							
						
						</>
					) : (
						""
					)}
				</div>

				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='buttons'>
							{token ? (
								<button
									className='button is-outlined'
									onClick={() => {
										setToken("")
										history.push("/login")
									}}>
									Logout
								</button>
							) : (
								<>
									<Link
										to='/register'
										className='button is-link'>
										Register
									</Link>
									<Link
										to='/login'
										className='button is-dark'>
										Login
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
