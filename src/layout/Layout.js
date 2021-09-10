import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Banner from '../image/Mail.jpg'
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <>
					<NavigationBar />
					<img className={classes.banner} src={Banner} alt="banner" />
					<main className={classes.main}>{props.children}</main>
					<Footer />
        </>
    );
};

export default Layout;