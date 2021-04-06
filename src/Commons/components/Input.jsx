import TextField from '@material-ui/core/TextField'

function Input({
	label,
	variant,
	type,
	onChange,
	defaultValue,
	name,
	...rest
}) {
	return (
		<div>
			<TextField
				label={label}
				name={name}
				type={type}
				variant={variant}
				onChange={onChange}
				defaultValue={defaultValue}
				{...rest}
			/>
		</div>
	);
}

export default Input;
