import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Items } from "./pages/Items";
import { ItemDetail } from "./pages/ItemDetail";

function App() {
	return (
		<Router>
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
