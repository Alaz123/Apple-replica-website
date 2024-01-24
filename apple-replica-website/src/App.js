import React from "react";

import { Routes, Route, useParams } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the style CSS files
import "./resources/css/bootstrap.css";
import "./resources/css/styles.css";

// Importing the class-based components

import Alert from "./components/sectionsWithNoProps/Alert.js";
import Section from "./components/sections/Section.js";
import Halfsection from "./components/sectionsWithNoProps/Halfsection.js";

import YoutubeVideos from "./components/Youtube/YoutubeVideos.js";

import Homepages from "./pages/home/Home.js";
import Iphones from "./components/Iphones/Iphones.js";

import Four04 from "./components/Error/Error.js";
import EachIphone from "./components/EachIphone/EachIphone.js";
import Rate from "./components/Rate/Rate.js";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Homepages />}>
				<Route
					path="/"
					element={
						<>
							<Alert />
							<Section />

							<Halfsection />
							<YoutubeVideos />
						</>
					}
				/>
				<Route
					path="mac"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Mac page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route path="iphone" element={<Iphones />} />
				<Route path="iphone/:productID" element={<EachIphone />} />
				<Route
					path="ipad"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Ipad page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route
					path="watch"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Watch page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route
					path="tv"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Tv page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route
					path="music"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Music page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route
					path="support"
					element={
						<div className="text-center">
							<br />
							<br />
							<br />
							<b>
								<h1>Support page</h1> <br />
							</b>
							<br />
						</div>
					}
				/>
				<Route
					path="search"
					element={
						<>
							<h1 className="text-center">
								<br />
								<br />
								<b>Search page</b>
								<br />
							</h1>
							<br />
						</>
					}
				/>
				<Route
					path="cart"
					element={
						<div className="text-center">
							<br />
							<br />
							<br />
							<b>
								<h1>Cart page</h1> <br />
								<h4>New products will be available soon!</h4>
							</b>
							<br />
						</div>
					}
				/>
				<Route path="*" element={<Four04 />} />
			</Route>
		</Routes>
	);
}

export default App;
