import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palette: {
		primary:{
			main:'#009688'
		},
		secondary:{
			main:'#607d8b'
		},
		warning:{
			main:'#ffc107'
		},
		info:{
			main:'#84ffff'
		},
		success:{
			main:'#69f0ae'
		},
		error:{
			main:'#ff5252'
		}

	},
	typography:{
		h1:{
			fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em"
		},
		h2:{
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em"
		},
		h3:{
			fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacing: "0em",
		},
		h4:{
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em"
		}
	}
})

export default theme;