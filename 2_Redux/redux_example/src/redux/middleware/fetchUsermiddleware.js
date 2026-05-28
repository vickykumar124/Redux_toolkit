import { userActions } from "../slice/userSlice";

// redux thunk internally handles it

const fetchUsermiddleware = (params)=> {

    return async (dispatch) => {

        try {

            dispatch(userActions.onpending());

           const userResp = await fetch(
   `https://jsonplaceholder.typicode.com/users/${params}`
);

            const userData = await userResp.json();

            dispatch(userActions.onfulfilled(userData));

        } catch (err) {

            dispatch(userActions.onrejected(err.message));
        }
    }
}

export default fetchUsermiddleware;