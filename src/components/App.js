import React, { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
function App() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [value, setValue] = useState(0);
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				<Switch>
					<Route
						exact
						path="/"
						component={() => <div style={{ height: "2000px" }}>Home</div>}
					></Route>
					<Route
						exact
						path="/services"
						component={() => <div>Services</div>}
					></Route>
					<Route
						exact
						path="/customsoftware"
						component={() => <div>Custom Software</div>}
					></Route>
					<Route
						exact
						path="/mobileapps"
						component={() => <div>Mobile Apps</div>}
					></Route>
					<Route
						exact
						path="/websites"
						component={() => <div>Websites</div>}
					></Route>
					<Route
						exact
						path="/revolution"
						component={() => <div>Revolution</div>}
					></Route>
					<Route exact path="/about" component={() => <div>About</div>}></Route>
					<Route
						exact
						path="/contact"
						component={() => <div>Contact</div>}
					></Route>
					<Route
						exact
						path="/estimate"
						component={() => <div>Estimate</div>}
					></Route>
				</Switch>
				<Footer
					value={value}
					setValue={setValue}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
