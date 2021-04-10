import {AppBar,Toolbar,IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Wrapper from "./Flexbox";

 const Navbar = styled(({ menuHandler, title,...props }) => (
  <AppBar position="sticky" {...props}>
    <Toolbar>
      <Wrapper justify="space-between">
        <Wrapper>
          <IconButton className="menu-icon" onClick={() => menuHandler()}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <p className="title">{title}</p>
        </Wrapper>
      </Wrapper>
    </Toolbar>
  </AppBar>
))`
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