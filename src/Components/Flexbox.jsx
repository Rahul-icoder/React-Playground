import styled from "styled-components";

const Wrapper = styled.div`
	display:flex;
	flex-direction:${({column})=>column? 'column':'row'};
	flex:1;
	align-items: center;
	gap:${(props)=>props.gap ? props.gap : 0};
	justify-content:${(props)=>props.justify||'flex-start'}
`

export default Wrapper;

