import styled from "styled-components";
import React from 'react'
const Div = styled.div`
	display:inline-block;
	height:${({size})=> size ? `${size}px` : `200px`};
	width:${({size})=> size ? `${size}px` : `200px`};
	img{
		border-radius:50%;
		height:100%;
		width:100%;
	}
`
function Avatar({url,name,size}) {
	return (
		<Div size={size}>
			<img src={url} alt={name} />
		</Div>
	)
}

export default Avatar;