import React, {useState, useContext} from 'react';
import MainMenu from './components/menus/mainMenu';
import FileUpload from './components/elements/fileUpload';
import UrlUpload from './components/elements/urlUpload';
import ChartCanvas from './components/elements/chartCanvas';
import {UploadContext} from './contexts/uploadContext';

const defaultURL = 'https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv';

export const App = () => {
	const [dataURL, setDataURL] = useState(defaultURL);

	return (
		<div id='App'>
			<MainMenu></MainMenu>
			<UploadContext.Provider value={{dataURL, setDataURL}}>
				<div id='Content' className='container p-5'>
					<section id='UploadWrap'>
						<FileUpload ></FileUpload>
						<UrlUpload ></UrlUpload>
					</section>
					<section id='ChartWrap' style={{background: 'white'}}>
						<ChartCanvas></ChartCanvas>
					</section>
				</div>
			</UploadContext.Provider>
		</div>
	);
}

export default App;
