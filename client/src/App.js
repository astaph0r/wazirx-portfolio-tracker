import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Tracker } from "./Components/Tracker";
import { Login } from "./Components/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Error404 } from "./Components/Error404";

function App() {

	// if (window.location.href.includes("home#")) {
	// 	const uri = window.location.href;
	// 	const token = uri.slice(uri.indexOf("#") + 1);
	// 	localStorage.setItem("token", token);
	// 	window.history.replaceState({}, "home", "/home");
	// }

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
					/>
					<Route
						exact
						path="/home"
						render={() => {
							return (
								<>
									<Header logo={logo} />
									<Tracker coins={coins} />
								</>
							);
						}}
					/>
					<Route
						exact
						path="/portfolio"
						render={() => {
							return (
								<>
									<Header logo={logo} />
									<Tracker coins={coins} />
								</>
							);
						}}
					/>
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
					/>
					<Route exact path="*">
						<Error404 />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
