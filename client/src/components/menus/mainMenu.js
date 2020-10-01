import React from 'react';

function MainMenu() {
	return (
		<nav id='MainMenu' className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<a className='navbar-brand' href='#'></a>
			<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#MainMenuContent' aria-controls='MainMenuContent' aria-expanded='false' aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='MainMenuContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<a className='nav-link' href='/'>Home</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default MainMenu;
