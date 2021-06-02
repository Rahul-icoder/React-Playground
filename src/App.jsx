import Container from "./Container";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./Themes/theme";
import { CssBaseline } from '@material-ui/core';
import { StoreProvider } from 'easy-peasy';
import { store } from './Store';
import CounterContext from "./Context/CounterContext"

function App() {
	return (
		<CounterContext>
			<StoreProvider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline/>
					<Container/>
				</ThemeProvider>
			</StoreProvider>	
		</CounterContext>
	)
}

export default App