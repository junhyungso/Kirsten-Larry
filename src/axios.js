import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://kirsten-larry-default-rtdb.firebaseio.com/'
})

export default instance;