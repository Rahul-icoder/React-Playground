import {AppBar,Toolbar,IconButton,Badge} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Wrapper from "./Flexbox";
import {useCounter} from "../Context/CounterContext";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

 const Navbar = styled(({ menuHandler, title,...props }) =>{ 
  let {count} = useCounter();
  return(
  <AppBar position="sticky" {...props}>
    <Toolbar>
      <Wrapper justify="space-between">
        <Wrapper>
          <IconButton className="menu-icon" onClick={() => menuHandler()}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <p className="title">{title}</p>
        </Wrapper>
        <Badge badgeContent={count} color="secondary">
            <AddShoppingCartIcon style={{color:'yellow'}} />
        </Badge>
      </Wrapper>
    </Toolbar>
  </AppBar>
)})`
  height:60px;
 	.title {
 	   font-family: 'Dancing Script', sans-serif;
 	   font-size: 1.2rem;
     margin-left:3rem;
 	 }
 	 .menu-icon {
 	   display: initial;
 	   font-size: 2.25rem;
     position:absolute;
     left:0;
     margin-left:0.3rem;
 `;

export default Navbar;