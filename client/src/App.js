import React from 'react';
import MainMenu from './components/menus/mainMenu';
import FileUpload from './components/elements/fileUpload';

function App() {
	return (
		<div id='App'>
			<MainMenu></MainMenu>
			<div id='Content' className='container p-5'>
				<section id='UploadWrap'>
					<FileUpload></FileUpload>
				</section>
			</div>
		</div>
	);
}

export default App;
