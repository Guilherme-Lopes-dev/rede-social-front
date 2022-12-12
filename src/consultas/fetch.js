import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetchPosts =  () => {
	const [state, setState] = useState({posts:[], loading:false})
	const fetchPosts = async () => {
		const response = await axios.get('http://localhost:3000/users');
		return response.data
	}

	useEffect(() =>{
		const makeRequest = async () =>{
			setState((prevState) => ({...prevState, loading: true}))

			const request = await fetchPosts()
			setState({posts: request, loading:false})
		}
		makeRequest()
	}, [])


	return state
}
