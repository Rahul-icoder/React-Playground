import { useState,useContext } from "react";
import { makeStyles } from "@material-ui/core";
import {
	Modal,
	Wrapper,
	Box,
	Button,
	Navbar,
	Sidebar,
	Loader,
	Avatar
} from "../Components";
import logo from "../Assets/images/logo.jpg"
import Form from "./Form";
import {Counter} from "../Context/CounterContext";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.warning.main,
		"&:hover": {
			background: "orange",
		},
	},
}));
function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [isSidebar, setIsSidebar] = useState(false);
	const {count,increament,decreament} = useContext(Counter)
	function handleMenu() {
		setIsSidebar(true);
	}
	function handleClose() {
		setIsOpen(false);
	}
	return (
		<div>
			<Navbar title="Mushin Aqua" menuHandler={handleMenu} />
			<Loader/>
			<Wrapper justify="center">
				<Box mt="5">
					<Button color="secondary" onClick={() => setIsOpen(true)}> Add Form </Button>
				</Box>
			</Wrapper>
			<Box mt="5">
				<p>{count}</p>
				<Button onClick={increament}>Increament</Button>
				<Button onClick={decreament}>Decreament</Button>
			</Box>
			<Modal open={isOpen} handleClose={handleClose} title="Register Form">
				<Form/>
			</Modal>
			<Sidebar {...{isSidebar}} handleCloseSide={()=>setIsSidebar(false)} handleOpenSide={()=>setIsSidebar(true)}>
				<Wrapper justify="center"><Avatar url={logo} name="logo" size="100"/></Wrapper>
			</Sidebar>
		</div>
	);
}

export default Home;
