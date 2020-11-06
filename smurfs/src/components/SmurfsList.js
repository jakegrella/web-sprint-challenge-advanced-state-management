import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

import { fetchSmurfs } from '../store/actions';

const SmurfsList = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);

	// console.log('AFTE USEEFF props', props);
	console.log('AFTERUSEEFF props.smurfs', props.smurfs);

	return (
		<div>
			<h2>Smurfs</h2>
			{props.isLoading ? <p>Loding smurfs...</p> : null}
			{props.error ? <p>{props.error}</p> : null}
			{props.smurfs.length > 0 &&
				props.smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		smurfs: state.smurfs,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfsList);
