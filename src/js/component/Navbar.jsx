import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info text-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								About
							</a>
						</li>

						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
