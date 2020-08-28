import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const NavBar = () => (
	<div>
		<Navbar color="light" light expand="sm" className="mb-5">
			<Container>
				<NavbarBrand href="/">Redux Todo App</NavbarBrand>
			</Container>
		</Navbar>
	</div>
);

export default NavBar;
