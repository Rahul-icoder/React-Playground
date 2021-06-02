import React,{createContext,useState,useContext} from 'react'

export const Counter = createContext();
export const useCounter = () => useContext(Counter)
const CounterContext = (props) => {

	const [count, setCount] = useState(0)

	const increament = () =>{
		setCount(prev=>prev+1)
	}

	const decreament = () =>{
		setCount(prev=>prev-1)
	}

	const value = {count,increament,decreament}
	return (
		<Counter.Provider value={value}>
			{props.children}
		</Counter.Provider>
	)
}

export default CounterContext