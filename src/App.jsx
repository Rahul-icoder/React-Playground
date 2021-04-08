import Container from "./Container";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./Commons/theme/theme";
import { CssBaseline } from '@material-ui/core';
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<Container/>
			</ThemeProvider>	
		</>
	)
}

export default App