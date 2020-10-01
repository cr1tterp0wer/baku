import React from 'react';

function UrlUpload() {
	return (
	<div id='UrlUploader'>
		<div className='input-group mb-3'>
			<input type='text' className='form-control' placeholder='Raw CSV URL' aria-label='Raw CSV URL' aria-describedby='basic-addon2'>
			<div className='input-group-append'>
				<button className='btn btn-outline-secondary' type='button'>Dream Eater!</button>
			</div>
		</div>
	</div>
  );
}

export default UrlUpload;
