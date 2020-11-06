import axios from 'axios';

// action types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => {
	return (dispatch) => {
		// async actions
		dispatch({ type: FETCH_SMURFS_START });

		// fetch data
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				console.log('res.data', res.data);
				dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
			});
	};
};

export const addSmurf = (smurf) => {
	return (dispatch) => {
		axios
			.post('http://localhost:3333/smurfs', smurf)
			.then((res) => {
				dispatch({ type: ADD_SMURF, payload: res.data });
			})
			.catch((err) => {
				dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message });
			});
	};
};
