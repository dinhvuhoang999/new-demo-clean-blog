import {
	FETCH_POST_BEGIN,
	FETCH_POST_SUCCESS,
	FETCH_POST_ERROR,
} from "../actions";

const initialState = {
	postsList: [] ,
	loading: false,
	error :null
}

export default function productReducer(state = initialState, action) {
	switch(action.type) {
			case FETCH_POST_BEGIN:
					return {
							...state,
							loading:true,
							error : null
					}
			case FETCH_POST_SUCCESS:
					console.log('asdas',[action.payload.posts.data]);
					return {
							...state,
							loading:true,
							postsList: action.payload.posts.data
					}
					case FETCH_POST_ERROR:
							return {
									...state,
									loading: false,
									postsList:[],
									error: action.payload.error,
							}

							default:
							return state;
			}
}