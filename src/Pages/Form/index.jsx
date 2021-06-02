import React from 'react'
import {
	Wrapper,
	Box,
	Button,
	Input,
} from "../../Components";
import {form_model} from "../../Store/Form/form_model";
import { useLocalStore,action,useStoreActions } from 'easy-peasy';
function Form() {
  const [state, actions] = useLocalStore(
    () => ({
      form_model, // 👈 using state to initialize model
      setName: action((_state, e) => {
      	let name = e.target.name;
      	let value = e.target.value;
        _state.form_model[name] = value;
      }),
    }),
    [form_model], // 👈 recreate model every time we receive a different product
  );
  const submit = useStoreActions(actions=>actions.submit)
	return (
		<Box mb="2">
			<Wrapper column>
				<Box m="1" width="50">
					<Input
						fullWidth="true"
						type="text"
						name="name"
						color="primary"
						label="Name"
						variant="outlined"
						onChange={(e) => actions.setName(e)}
        				value={state.form_model.name}
					/>
				</Box>
				<Box m="1" width="50">
					<Input
						fullWidth="true"
						type="email"
						name="email"
						color="primary"
						label="Email"
						variant="outlined"
						onChange={(e) => actions.setName(e)}
        				value={state.form_model.email}
					/>
				</Box>
				<Box m="1" width="50">
					<Input
						fullWidth="true"
						type="password"
						name="password"
						color="primary"
						label="Password"
						variant="outlined"
						onChange={(e) => actions.setName(e)}
        				value={state.form_model.password}
					/>
				</Box>
				<Box m="1.2">
					<Button type="submit" color="Primary" onClick={submit}>
						Submit
					</Button>
				</Box>
			</Wrapper>
		</Box>
	)
}

export default Form