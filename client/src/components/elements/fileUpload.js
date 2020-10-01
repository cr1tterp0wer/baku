import React, {useContext, useState} from 'react';

 export const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');

	const sprungeUpload = (filename) => {
	};

	const fileInputChange = (evt) => {
		evt.preventDefault();
		console.log(evt.target.files[0]);
		setFileName(evt.target.files[0].name);
	};

	const submitFile = (evt) => {
		evt.preventDefault();
		console.log(evt.target);
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
