import { 	LOADING,
			FETCH_DATA_FIRST_TIME,
			FETCH_DATA_FIRST_TIME_FAILED,
			SET_PAGINATION_PAGE,
			SET_CATEGORY_DETAIL_PAGE,
			SET_SINGLE_MODEL_DETAIL
	   } from '../Actions/index.js';
import axios from 'axios';

const dataFetchUrl = `https://s3.ap-south-1.amazonaws.com/scapic-others/json/models.json`;

export const fetchDataFirstTime = () => {
	const requestData = () => axios(dataFetchUrl);

	return (dispatch) => {
		dispatch({
			type: LOADING
		});

		requestData()
		.then((res) => {
			console.log(res);
			dispatch({
				type: FETCH_DATA_FIRST_TIME,
				payload: res.data
			});
		})
		.catch((error) => {
			dispatch({
				type: FETCH_DATA_FIRST_TIME_FAILED
			});
		});

	}
}

export const setPaginationPage = (start, end) => {
	return {
		type: SET_PAGINATION_PAGE,
		payload: {
			start,
			end
		}
	}
}

export const setCategoryDetailPage = (name) => {
	return {
		type: SET_CATEGORY_DETAIL_PAGE,
		payload: name
	}
}

export const setSingleModelDetail = (value) => {
	console.log(value);
	return {
		type: SET_SINGLE_MODEL_DETAIL,
		payload: value
	}
}

//	const requestData = () => axios({ url: dataFetchUrl, method: 'Post', headers: {'X-Requested-With': 'XMLHttpRequest'} });
