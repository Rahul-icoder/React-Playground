import {useState} from 'react'

function useForm(initialValue) {
	const [value, setValue] = useState(initialValue);
	const handleChange = ({target}) =>{
		const value = target.checked ? target.cheked : target.value; 
		setValue(prev => ({...prev,[target.name]:value}))
	}
	const reset = () =>{
		setValue(initialValue)
	}
	return [handleChange,reset,value];
}

export default useForm