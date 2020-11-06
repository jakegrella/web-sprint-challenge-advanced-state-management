import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../store/actions/';

const initialSmurf = { name: '', age: '', height: '' };

const Form = (props) => {
	const [smurf, setSmurf] = useState(initialSmurf);

	const handleChanges = (e) => {
		setSmurf({ ...smurf, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addSmurf(smurf);
		setSmurf(initialSmurf);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				name='name'
				type='text'
				placeholder='name'
				onChange={handleChanges}
			/>
			<input
				name='age'
				type='text'
				placeholder='age'
				onChange={handleChanges}
			/>
			<input
				name='height'
				type='text'
				placeholder='height'
				onChange={handleChanges}
			/>
			{/* <button onClick={() => {}}>add</button> */}
			<button>add</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		smurfs: state.smurfs,
		error: state.error,
	};
};

export default connect(mapStateToProps, { addSmurf })(Form);
