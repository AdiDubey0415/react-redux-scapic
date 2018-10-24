// import { models } from '../Models/index.js';
import { 	LOADING,
			FETCH_DATA_FIRST_TIME,
			FETCH_DATA_FIRST_TIME_FAILED,
			SET_PAGINATION_PAGE, 
			SET_CATEGORY_DETAIL_PAGE,
			SET_SINGLE_MODEL_DETAIL
	   } from '../Actions/index.js';

const defaultState = {
	test: '',
	data: [],
	selectedCategory: {
		categoryList: [],
		currentModel: {}
	},
	pagination: {
		start: 0,
		pageLength: 2,
		end: 2,
	}
}

let newState;

export default function AppState(state = defaultState, action) {

	console.log(action);

	switch(action.type) {
		case LOADING:
		newState = {...state};
		newState.test = 'Loading';
		return newState;

		case FETCH_DATA_FIRST_TIME:
		newState = {...state};
		newState.data = action.payload;
		return newState;

		case FETCH_DATA_FIRST_TIME_FAILED:
		newState = {...state};
		newState.test = 'Failed to load. Kindly try again.';
		return newState;

		case SET_PAGINATION_PAGE:
		newState = {...state};
		newState.pagination.start = action.payload.start;
		newState.pagination.end = action.payload.end;
		return newState;

		case SET_CATEGORY_DETAIL_PAGE:
		newState = {...state};
		newState.selectedCategory.categoryList = newState.data.categories.filter((val, index) => val.name === action.payload);
		newState.selectedCategory.currentModel.img = newState.selectedCategory.categoryList[0].models[0].thumb;
		newState.selectedCategory.currentModel.desc = newState.selectedCategory.categoryList[0].models[0].name;
		return newState;

		case SET_SINGLE_MODEL_DETAIL:
		newState = {...state};
		console.log(action.payload);
		newState.selectedCategory.currentModel.img = action.payload.thumb;
		newState.selectedCategory.currentModel.desc = action.payload.name;
		return newState;

		default:
		return state;
	}

}

// get end() {
// 	return this.pageLength;
// },
// set end(val) {
// 	this.pageLength = val;
// }
