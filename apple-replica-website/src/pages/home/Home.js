import { Outlet } from "react-router-dom";
import Nav from "../../components/Header/Nav";
import Mainfotter from "../../components/fotter/Mainfotter";

function Homepages() {
	return (
		<>
            <Nav />
            <Outlet/>
			<Mainfotter />
		</>
	);
}

export default Homepages;
