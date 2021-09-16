import axios from 'axios';
import { fetchPostsBegin, fetchPostsSuccess,fetchPostsError} from "./index";

// function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }


export function fetchPostApi() {
    return function(dispatch) {
      dispatch(fetchPostsBegin());
      return axios.get(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=100`)
			.then(( res ) => {

        dispatch(fetchPostsSuccess(res));
      })
      .catch(({error}) =>{
        dispatch(fetchPostsError(error));
      });
    };
  }



  // export function fetchPostApi() {
  //   return (dispatch) => {
  //     dispatch(fetchPostsBegin());
  //     return fetch('https://zsvt3.sse.codesandbox.io/posts')
  //       .then(handleErrors)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         dispatch(fetchPostsSuccess(json));
  //         console.log(json);
  //         return json;
  //       })
  //       .catch((error) => dispatch(fetchPostsError(error)));
  //   };
  // }