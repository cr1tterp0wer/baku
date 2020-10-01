import React, {useContext, useState} from 'react';
import $ from 'jquery';

 export const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');
	const [file, setFile] = useState();

	const sprungeUpload = (filename) => {
	};

	const fileInputChange = (evt) => {
		evt.preventDefault();
		setFileName(evt.target.files[0].name);
		setFile(evt.target.files[0]);
	};


	//SEND TO BACKEND, WAIT FOR RESPONSE FROM SPRUNGE, SET THE DATAURL
	const submitFile = (evt) => {
		evt.preventDefault();

		var reader = new FileReader(),
		    fileOutput = '';
		reader.onload = function(e) {
			fileOutput += reader.result;
		}

		reader.onloadend = function(e) {
			/*
			var settings = {
				"url": "http://sprunge.us",
				"method": "POST",
				"timeout": 0,
				"headers": {
					"Content-Type": "text/plain",
					"User-Agent":"PostmanRuntime/7.26.5"
				},
				"data": fileOutput
				}
			$.ajax(settings).done(function (response) {
				console.log(response);
			});
*/
		}

		reader.readAsText(file);
	};

	return (
	<div id='FileUploader'>
		<form onSubmit={submitFile}>
			<div className='input-group'>
				<div className='input-group-prepend'>
					<input className={(fileName=='Choose File') ? 'btn btn-secondary': 'btn btn-primary'} id='FileUploadButton' type='submit' value='Submit'/>
				</div>
				<div className='custom-file'>
					<input
					 type='file'
					 className='custom-file-input'
					 id='FileUploaderChoice'
					 onChange={fileInputChange}
					 aria-describedby='FileUploaderChoice'/>

					<label className='custom-file-label' htmlFor='FileUploaderChoice'>{fileName}</label>
				</div>
			</div>
		</form>
	</div>
  );
}

export default FileUpload;
