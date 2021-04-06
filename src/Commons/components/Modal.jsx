import {Modal} from "@material-ui/core";
import styled from 'styled-components';

export const CustomModal = styled(({ handleClose, open,children,...props }) => (
	<Modal open={open} onClose={handleClose} {...props}>
		<div className="modal-div">
			{children}
		</div>
	</Modal>
))`
	
`;