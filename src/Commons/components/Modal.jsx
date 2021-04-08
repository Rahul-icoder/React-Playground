import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import styled from "styled-components";

export const CustomModal = styled(
	({ handleClose, title, open, children, ...props }) => (
		<Dialog open={open} onClose={handleClose} {...props}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
)`
	width: 100%;
	.MuiDialog-paper {
		width: 90%;
	}
	.MuiDialog-paperWidthSm{
		max-width:unset;
	}
`;
