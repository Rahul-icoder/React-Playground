import {action} from "easy-peasy"
export const form_model = {
	details : [],
	submit: action((state,payload)=>{
		state.details.push(payload)
	})
}