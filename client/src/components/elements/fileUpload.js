import React from 'react';

function FileUpload() {
	return (
	<div id='FileUploader'>
		<div className='input-group mb-3'>
			<div className='custom-file'>
				<input type='file' className='custom-file-input' id='inputGroupFile02'/>
				<label className='custom-file-label' htmlFor='inputGroupFile02'>Choose file</label>
			</div>
			<div className='input-group-append'>
				<span className='input-group-text' id='SubmitUpload'>Upload</span>
			</div>
		</div>
	</div>
  );
}

export default FileUpload;
