import React from 'react';
import MainMenu from './components/menus/mainMenu';
import FileUpload from './components/elements/fileUpload';
import ChartCanvas from './components/elements/chartCanvas';

function App() {
	return (
		<div id='App'>
			<MainMenu></MainMenu>
			<div id='Content' className='container p-5'>
				<section id='UploadWrap'>
					<FileUpload></FileUpload>
				</section>
				<section id='ChartWrap' style={{background: 'white'}}>
					<ChartCanvas data={[1,2,3]}></ChartCanvas>
				</section>
			</div>
		</div>
	);
}

export default App;
