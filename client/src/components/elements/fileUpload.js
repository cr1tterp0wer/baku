import React, {useContext, useState} from 'react';
import $ from 'jquery';
import axios from 'axios';
import {UploadContext} from '../../contexts/uploadContext';

 export const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');
	const [file, setFile] = useState();
	const {dataURL, setDataURL} = useContext(UploadContext);

	const postSprunge = (data) => {
	};

	const fileInputChange = (evt) => {
		evt.preventDefault();
		setFileName(evt.target.files[0].name);
		setFile(evt.target.files[0]);
	};

	//SEND TO BACKEND, WAIT FOR RESPONSE FROM SPRUNGE, SET THE DATAURL
	const submitFile = (evt) => {
		evt.preventDefault();
		const formData = new FormData();
		formData.append('myFile', file, fileName);

		axios.post('/sprunge', formData).then(function(sprungeURL) {
			if (sprungeURL) {
				setDataURL(sprungeURL.data);
				console.log(dataURL);
			}
		});
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
