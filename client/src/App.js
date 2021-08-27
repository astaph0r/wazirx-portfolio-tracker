import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Portfolio } from "./Components/Portfolio";
import { Login } from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const coins = [
		{
			image: "https://via.placeholder.com/100x100",
			title: "ABCD",
			difficulty: "Hard",
			time: "20",
			servings: "12",
			author: "ANDKSK",
			rating: "3.0",
		},
		{
			image: "https://via.placeholder.com/100x100",
			title: "EFCFFF",
			difficulty: "Easy",
			time: "20",
			servings: "12",
			author: "ANDKSK",
			rating: "3.0",
		},
	];

	return (
		<>
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<>
									<Login />
								</>
							);
						}}
					></Route>
					<Route
						exact
						path="/home"
						render={() => {
							return (
								<>
									<Header logo={logo} />
									<Portfolio coins={coins} />
								</>
							);
						}}
					></Route>
          <Route
						exact
						path="/portfolio"
						render={() => {
							return (
								<>
									<Header logo={logo} />
									<Portfolio coins={coins} />
								</>
							);
						}}
					></Route>
          <Route
						exact
						path="/add"
						render={() => {
							return (
								<>
									<Header logo={logo} />
								</>
							);
						}}
					></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
