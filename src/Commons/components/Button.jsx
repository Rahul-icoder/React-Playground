import {Button} from "@material-ui/core";

function Button({children,color,variant,...rest}) {
	return (
		<div>
			<Button variant={variant} color={color} onClick={onClick} {...rest}>
				{children}
			</Button>
		</div>
	)
}

export default Button;