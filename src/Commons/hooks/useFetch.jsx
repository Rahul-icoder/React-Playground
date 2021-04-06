import {useState,useEffect} from 'react';
import axios from "axios";

function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	useEffect(() => {
		setLoading(true);
		(async() => {
			try{
				const {data} = await axios.get(url);
				setData(data);
				setLoading(false);
			}catch(err){
				setError(err.message)
			}
		})()
	}, [url])
	return [data,error,loading];
}

export default useFetch;