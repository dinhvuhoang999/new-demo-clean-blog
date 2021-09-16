import {
	FETCH_POST_BEGIN,
	FETCH_POST_SUCCESS,
	FETCH_POST_ERROR,
	FETCH_PAG,
} from "../actions";

const initialState = {
	postsList: [],
	loading: false,
	error: null
}

export default function productReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_POST_BEGIN:
			return {
				...state,
				loading: true,
					error: null
			}
			case FETCH_PAG:
				return {
					...state,
					loading: true,
						error: null,
					postpagination:action.payload.posts ,
				}
				case FETCH_POST_SUCCESS:
					return {
						...state,
						loading: true,
							postsList: action.payload.posts.data.results
					}
					case FETCH_POST_ERROR:
						return {
							...state,
							loading: false,
								postsList: [],
								error: action.payload.error,
						}

						default:
							return state;
	}
}