import axios from 'axios';
import { useState } from 'react';

export const usePutPosts =  () => {
	const [state, setState] = useState({posting:[], loading:false})
	const putPosts = async () => {
		const post = await axios.post('http://localhost:3000/users', {
            name: 'guilherme',
            content: 'conteudo 3'
        });
		console.log('gravou')
		
	}
	return state
}