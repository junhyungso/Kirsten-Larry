import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from './pages/MainPage';
import Layout from "./layout/Layout";
import NotFound from './pages/NotFound';
import About from "./pages/About";
import Issues from "./pages/Issues";
import PropertyTaxes from './components/Property/PropertyTaxes';
import Masks from './components/Masks/Masks';
import Contact from "./pages/Contact";
import Support from "./pages/Support";
function App() {
  return (
    <Router>
			<Layout>
				<Switch>
					<Route path='/' exact>
							<MainPage />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/Issues'>
							<Issues />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
						<Route path='/others'>
							<MainPage />
						</Route>
						<Route path='/support'>
							<Support />
						</Route>
						<Route path='/propertytaxes'>
							<PropertyTaxes />
						</Route>
						<Route path='/masks'>
							<Masks />
						</Route>
						<Route path='*'>
							<NotFound />
						</Route>
				</Switch>
			</Layout>
		</Router>
  );
}

export default App;
