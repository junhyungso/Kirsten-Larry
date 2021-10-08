import {
  HashRouter as Router,
  Switch,
  Route,
	Redirect
} from "react-router-dom";

import MainPage from './pages/MainPage';
import Layout from "./layout/Layout";
import About from "./pages/About";
import Issues from "./pages/Issues";
import DistrictInformation from "./pages/DistrictInformation";
import PropertyTaxes from './components/Property/PropertyTaxes';
import Masks from './components/Masks/Masks';
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Curriculum from "./components/Curriculum/Curriculum";
import Missionstatement from "./components/MissionStatement/MissionStatement";
import Factors from './pages/Factors';

function App() {

  return (
			<Router basename={process.env.PUBLIC_URL}>
				<Layout>
					<Switch>
						<Route path='/' exact>
								<MainPage />
							</Route>
							<Route path='/about'>
								<About />
							</Route>
							<Route path='/districtinformation'>
								<DistrictInformation />
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
							<Route path='/curriculum'>
								<Curriculum />
							</Route>
							<Route path='/missionstatement'>
								<Missionstatement />
							</Route>
							<Route path='/factorstoconsider'>
								<Factors />
							</Route>
							<Route path='*'>
								<Redirect to="/" />
							</Route>
					</Switch>
				</Layout>
			</Router>
  );
}

export default App;
