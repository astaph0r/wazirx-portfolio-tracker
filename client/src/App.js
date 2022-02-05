import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Tracker } from "./Components/Tracker";
import { Login } from "./Components/Login";
import { AddTracker } from "./Components/AddTracker";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
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

	const fetchDetails = async () => {
		const response = await axios.get("/details");
		const user = await response.data.user;
		const portfolio = await response.data.portfolio;
		const markets = await response.data.markets;
		console.log(response.data.user);

		setUser(user);
		setPortfolio(portfolio);
		setMarkets(markets);
	};

	// eslint-disable-next-line
	const fetchPortfolio = async () => {
		const response = await axios.get("/details");
		const portfolio = await response.data.portfolio;

		setPortfolio(portfolio);
	};

	const onChange = (e) => {
		const { id, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const onSubmit = () => {
		const update = [
			...portfolio,
			{
				date: formState.formDate,
				market: formState.formMarket,
				amountOfCoins: formState.formQuantity,
				buyingPrice: formState.formPrice,
			},
		];
		axios.put("/portfolio", { portfolio: update }).then(fetchPortfolio());
		// console.log(portfolio)
	};

	const onDelete = (id) => {
		const newPortfolio = portfolio.filter((d) => d._id !== id);
		axios
			.put("/portfolio", { portfolio: newPortfolio })
			.then(fetchPortfolio());
		// console.log(portfolio)
	};

	// async function fetchPortfolio() {
	// 	const response = await axios.get('http://localhost:5000/user');
	// 	const user = await response.data;
	// 	setUser(user);
	// }

	// eslint-disable-next-line
	const [user, setUser] = useState([]);
	const [portfolio, setPortfolio] = useState([]);
	const [markets, setMarkets] = useState([]);

	// eslint-disable-next-line
	const [formState, setFormState] = useState({
		formDate: new Date().toISOString().slice(0, -5),
		formMarket: "btcinr",
		formQuantity: 1,
		formPrice: 0,
	});

	useEffect(() => {
		fetchDetails();
	}, []);

	useEffect(() => {
		console.log(formState);
	});

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						{!user ? (
							<>
								<Login />
							</>
						) : (
							<Redirect to="/home" />
						)}
					</Route>
					<Route exact path="/home">
						{user ? (
							<>
								<Header logo={logo} user={user} />
								{/* <Tracker coins={portfolio} /> */}
								<AddTracker
									formState={formState}
									setFormState={setFormState}
									markets={markets}
									onChange={onChange}
									onSubmit={onSubmit}
								/>
								<Tracker
									coins={portfolio}
									onDelete={onDelete}
								/>
							</>
						) : (
							<Redirect to="/" />
						)}
					</Route>
					<Route exact path="/portfolio">
						{user ? (
							<>
								<Header logo={logo} user={user} />
								<Tracker
									coins={portfolio}
									onDelete={onDelete}
								/>
							</>
						) : (
							<Redirect to="/" />
						)}
					</Route>
					<Route exact path="/add">
						{user ? (
							<>
								<Header logo={logo} user={user} />
								<AddTracker
									formState={formState}
									setFormState={setFormState}
									markets={markets}
									onChange={onChange}
									onSubmit={onSubmit}
								/>
							</>
						) : (
							<Redirect to="/" />
						)}
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
