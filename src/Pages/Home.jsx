import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import {
	Modal,
	Wrapper,
	Box,
	Button,
	Navbar,
	Input,
	Sidebar,
	Loader
} from "../Commons/components/";

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
				<Box mt="3">
					<Button color="secondary" onClick={() => setIsOpen(true)}>
						Add Form
					</Button>
				</Box>
			</Wrapper>
			<Modal
				open={isOpen}
				handleClose={handleClose}
				title="Register Form"
			>
				<Box mb="2">
					<Wrapper column>
						<Box m="1" width="50">
							<Input
								fullWidth="true"
								type="text"
								color="primary"
								label="Name"
								variant="outlined"
							/>
						</Box>
						<Box m="1" width="50">
							<Input
								fullWidth="true"
								type="email"
								color="primary"
								label="Email"
								variant="outlined"
							/>
						</Box>
						<Box m="1" width="50">
							<Input
								fullWidth="true"
								type="password"
								color="primary"
								label="Password"
								variant="outlined"
							/>
						</Box>
						<Box m="1.2">
							<Button type="submit" color="Primary">
								Submit
							</Button>
						</Box>
					</Wrapper>
				</Box>
			</Modal>
			<Sidebar {...{isSidebar}} handleCloseSide={()=>setIsSidebar(false)} handleOpenSide={()=>setIsSidebar(true)}>
				<p>hello Good morning</p>
			</Sidebar>
		</div>
	);
}

export default Home;
