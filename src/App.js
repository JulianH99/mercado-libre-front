import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Items } from "./pages/Items";

function App() {
	return (
		<Router>
			<SearchBox />

			<Switch>
				<Route path="/items">
					<Items />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
