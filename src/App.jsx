import Container from "./Container";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./Commons/theme/theme"
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Container/>
			</ThemeProvider>	
		</>
	)
}

export default App