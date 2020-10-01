import React, {useContext, useState} from 'react';
import {UploadContext} from '../../contexts/uploadContext';

export const UrlUpload = (props) => {
	const {dataURL, setDataURL} = useContext(UploadContext);
	const [url, setURL] = useState(dataURL);

	const urlUploaderChange = (evt) => {
		evt.preventDefault();
		setURL(evt.currentTarget.value);
	};

	const submitURL = (evt) => {
		evt.preventDefault();
		setDataURL(url);
	};

	return (
	<div id='UrlUploader'>
		<form onSubmit={submitURL}>
			<div className='input-group mb-3'>
				<input
				 type='text'
				 className='form-control'
				 placeholder='Raw CSV URL'
				 aria-label='Raw CSV URL'
				 aria-describedby='basic-addon2'
				 value={url}
				 onChange={urlUploaderChange}
				 />
				<div className='input-group-append'>
					<button className='btn btn-outline-secondary' type='submit'>Dream Eater!</button>
				</div>
			</div>
		</form>
	</div>
	);
}

export default UrlUpload;
