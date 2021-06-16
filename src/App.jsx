import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FourZeroFour from "./pages/404page";
import Nav from "./Components/nav";
import Home from './pages/home';

function App() {
	return (
		<Router>
      <Nav />
			<Switch>
				<Route path='/home'>
					<Home />
				</Route>
				{/* renders TodoApp when user hits /todo */}
				<Route exact path='/todo'>
					<TodoApp />
				</Route>
				{/* renders Register when user hits /register */}
				<Route exact path='/register'>
					<Register />
				</Route>
				{/* renders Login when user hits /login */}
				<Route exact path='/login'>
					<Login />
				</Route>
        {/*  */}
				<Route>
					<FourZeroFour />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
