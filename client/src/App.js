import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Tracker } from "./Components/Tracker";
import { Login } from "./Components/Login";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Error404 } from "./Components/Error404";
// import { isAuthenticated } from "./Middlewares/authService" 
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

	// if (window.location.href.includes("home#")) {
	// 	const uri = window.location.href;
	// 	const token = uri.slice(uri.indexOf("#") + 1);
	// 	localStorage.setItem("token", token);
	// 	window.history.replaceState({}, "home", "/home");
	// }

	async function fetchData() {
		const response = await axios.get('http://localhost:5000/isAuthenticated');
		const user = await response.data;
		setUser(user);
	}
// eslint-disable-next-line
	const [user, setUser] = useState([]);

	useEffect(() => {		
		fetchData();
	}, []);

	console.log(user);

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
					
					<Route exact path="/">
						{!user
							? 	<>
									<Login />
								</>
							: <Redirect to="/home"/>
						}
					</Route>
					<Route exact path="/home">
						{user
							?	<>
									<Header logo={logo} user={user}/>
									<Tracker coins={coins} />
								</>
							: <Redirect to="/"/>
						}
								
					</Route>
					<Route exact path="/portfolio">
						
						{user
							?	<>
									<Header logo={logo} user={user} />
									<Tracker coins={coins} />
								</>
							: <Redirect to="/"/>
						}
					</Route>
					<Route exact path="/add">
						{user
							?	<>
									<Header logo={logo} user={user} />
								</>
							: <Redirect to="/"/>
						}					
					</Route>
					<Route exact path="*">
						<Error404 />
					</Route>

				</Switch>
			</Router>
		</>
	);
}

export default App;
