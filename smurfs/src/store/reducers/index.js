import {
	FETCH_SMURFS_START,
	FETCH_SMURFS_SUCCESS,
	FETCH_SMURFS_FAILURE,
	ADD_SMURF,
} from '../actions';

const initialState = {
	isLoading: false,
	smurfs: [],
	error: '',
};

const smurfsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS_START:
			return {
				...state,
				isLoading: true,
				error: '',
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
			};
		case FETCH_SMURFS_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		}
		case ADD_SMURF: {
			return {
				...state,
				smurfs: action.payload,
			};
		}
		default:
			return state;
	}
};

export { initialState, smurfsReducer };
