import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Items } from "./pages/Items";

function App() {
	return (
		<Router>
			{/* search box outside as layout */}
			<SearchBox />
			<div className="ml-container">
				<Switch>
					<Route path="/items">
						<Items />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
