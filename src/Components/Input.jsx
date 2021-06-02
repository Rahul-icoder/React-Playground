import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {	
   		margin: theme.spacing(0.4),
   		minWidth: "8rem",
   		height:"3rem",
   		'& .MuiOutlinedInput-root':{
   			borderRadius: 0,
   		}
  },
}));

function Input({
	label,
	onChange,
	name,
	...rest
}) {
	const classes = useStyles();
	return (
			<TextField
				label={label}
				name={name}
				className={classes.root}
				variant="outlined"
				onChange={onChange}
				{...rest}
			/>
	);
}

export default Input;
