import {Button} from "@material-ui/core";
import {useState} from "react"
import {makeStyles} from "@material-ui/core";
import Input from "../Commons/components/Input";
import Header from "../Commons/components/Navbar";
import {CustomModal} from "../Commons/components/Modal"

const useStyles = makeStyles((theme)=>({
	root:{
		backgroundColor:theme.palette.warning.main,
		'&:hover': {
       		background: "orange",
    	}
	},
	save:{
		backgroundColor:theme.palette.error.main,
		'&:hover': {
       		background: "red",
    	}
	}
}))
function Home() {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false)
	function handleMenu(){
		setIsOpen(true);
	}
	function handleClose(){
		setIsOpen(false)
	}
	return (
		<div>
			<Button  variant="contained" className={classes.root}>Submit</Button>
			<Button  variant="contained" className={classes.save}>Save</Button>
			<Input  type="time" color="primary"/>
			<Header title="Mushin Aqua" menuHandler={handleMenu}/>
			<CustomModal open={isOpen} handleClose={handleClose}>
				<h1>Hello Rahul Welcome to Modal</h1>
			</CustomModal>
		</div>
	)
}

export default Home;