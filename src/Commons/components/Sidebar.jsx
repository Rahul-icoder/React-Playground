import { SwipeableDrawer } from "@material-ui/core";
function Sidebar({isSidebar, handleCloseSide, handleOpenSide, children, ...props }) {
	return (
		<SwipeableDrawer
			anchor="left"
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
