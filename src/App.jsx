import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Ml from "./components/User/ML/Ml";
import Pet from "./components/User/Pet/Pet";
import Happy from "./components/User/Happy/Happy";
import Memes from "./components/User/Memes/Memes";
import Navigation from "./components/User/Navigation";
import Reports from "./components/User/Reports/Reports";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/user" element={<Navigation />} />
				<Route path="/ml" element={<Ml />} />
				<Route path="/happy" element={<Happy />} />
				<Route path="/pet" element={<Pet />} />
				<Route path="/memes" element={<Memes />} />
				<Route path="/reports" element={<Reports />} />
			</Routes>
		</Router>
	);
}

export default App;