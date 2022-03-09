import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./Arstagram.png"

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
			className='navbar is-light mb-5'
			role='navigation'
			aria-label='main navigation'>
			<div className='navbar-brand'>
				<a className='navbar-item' href='/'>
					{/* <img src={Logo} height='3rem' />{" "} */}

					
					
				</a>


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

			<div className='navbar-end' ref={navbar}>
				<div className='navbar-start'>
					{token ? (
						<>  
							<Link to='/Posts' className='navbar-item'>
								All Posts
							</Link>
							<Link to='/MyPosts' className='navbar-item'>
								My Posts
							</Link>
							<Link to='/createNewPost' className='navbar-item'>
								Create New Post
							</Link>
							<Link
								to='/categories'
								className='navbar-item'>
								Material Manager
							</Link>
							<Link to='/tags' className='navbar-item'>
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
										className='button is-outlined'>
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
