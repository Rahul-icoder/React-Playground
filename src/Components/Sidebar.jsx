import { SwipeableDrawer } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root:{
  	'& .MuiDrawer-paper':{
  		width:'280px',
  	}
  }
}));
function Sidebar({isSidebar, handleCloseSide, handleOpenSide, children, ...props }) {
	const classes = useStyles();
	return (
		<SwipeableDrawer
			anchor="left"
			className={classes.root}
			open={isSidebar}
			onClose={handleCloseSide}
			onOpen={handleOpenSide}
			{...props}
		>
			{children}
		</SwipeableDrawer>
	);
}

export default Sidebar;
