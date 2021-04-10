import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
   		padding: theme.spacing(1),	
   		borderRadius: 0,
   		minWidth: "8rem",
   		height:"3.1rem"
   	
  },
}));

function FormButton({children,color,onClick,variant,...rest}) {
	const classes = useStyles();
	return (
			<Button className={classes.root} variant="contained" color={color} onClick={onClick} {...rest}>
				{children}
			</Button>
	)
}

export default FormButton;