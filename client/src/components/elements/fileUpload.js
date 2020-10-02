import React, {useContext, useState} from 'react';
import $ from 'jquery';
import axios from 'axios';

 export const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');
	const [file, setFile] = useState();

	let reader = new FileReader(),
	    fileOutput = '';

	reader.onload = function(e) {
		fileOutput += reader.result;
	}

	reader.onloadend = function(e) {
		postSprunge(fileOutput);
	}

	const postSprunge = async (data) => {
		let formData = new FormData();
		formData.append('file', file).then(function() {

		console.log(formData);

		});
		const config = {
			method: 'POST',
			body: formData
		};

		fetch('/sprunge', config).then((response) => {
			console.log(response);
		});

		/*
		const response = await fetch('/sprunge', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ datapoints: data})
		}).then(function(response) {
			console.log(response);
		});
		*/
	};

	const fileInputChange = (evt) => {
		evt.preventDefault();
		setFileName(evt.target.files[0].name);
		setFile(evt.target.files[0]);
	};


	//SEND TO BACKEND, WAIT FOR RESPONSE FROM SPRUNGE, SET THE DATAURL
	const submitFile = (evt) => {
		evt.preventDefault();
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
