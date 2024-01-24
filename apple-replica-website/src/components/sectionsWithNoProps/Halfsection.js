import React, { Component } from "react";
import appletv from "../../resources/images/icons/apple-tv-logo.png";
import banker from "../../resources/images/home/banker.png";
import applewatch from "../../resources/images/icons/watch-series5-logo.png";
import arcade from "../../resources/images/icons/arcade.png";

export default class Halfsection extends Component {
	render() {
		return (
			<><br />
				{/* // <!-- Fourth section starts here --> */}
				<section className="fourth-heghlight-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="left-side-wrapper col-sm-12 col-md-6">
								<div className="left-side-container">
									<div className="title-wraper">iPhone 11</div>
									<div className="description-wraper">
										Just the right amount of everything.
									</div>
									<div className="price-wrapper">
										From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
									</div>

									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">Learn more</a>
											</li>
											<li>
												<a href="">Apply now</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="right-side-wrapper col-sm-12 col-md-6">
								<div className="right-side-container">
									<div className="title-wraper white">
										Get the latest CDC response to COVID-19.
									</div>

									<div className="links-wrapper white">
										<ul>
											<li>
												<a href="">Watch the PSA</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				{/* <!-- Fourth section ends here --> */}

				{/* <!-- Fifth section starts here --> */}
				<section className="fifth-heghlight-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="left-side-wrapper col-sm-12 col-md-6">
								<div className="left-side-container">
									<div className="top-logo-wrapper">
										<div className="logo-wrapper">
											<img src={appletv} />
										</div>
									</div>

									<div className="tvshow-logo-wraper">
										<img src={banker} />
									</div>

									<div className="watch-more-wrapper">
										<a href="#">Watch now on the Apple TV App</a>
									</div>
								</div>
							</div>
							<div className="right-side-wrapper col-sm-12 col-md-6">
								<div className="right-side-container">
									<div className="top-logo-wrapper">
										<div className="logo-wrapper">
											<img src={applewatch} />
										</div>
									</div>
									<div className="description-wraper">
										With the Always-On Retina display.
										<br />
										You’ve never seen a watch like this.
									</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">Learn more</a>
											</li>
											<li>
												<a href="">Buy</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				{/* <!-- Fifth section ends here --> */}

				{/* <!-- Sixth section starts here --> */}
				<section className="sixth-heghlight-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="left-side-wrapper col-sm-12 col-md-6">
								<div className="left-side-container">
									<div className="top-logo-wrapper">
										<div className="logo-wrapper">
											<img src={arcade} />
										</div>
									</div>
									<div className="description-wraper white">
										Agent 8 is a small hero on a big mission.
									</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">
													Play now<sup>2</sup>
												</a>
											</li>
											<li>
												<a href="">Learn about Apple Arcade</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="right-side-wrapper col-sm-12 col-md-6">
								<div className="right-side-container">
									<div className="title-wraper">
										Apple Card Monthly Installments
									</div>
									<div className="description-wraper">
										Pay for your next iPhone over time, interest-free with Apple
										Card.
									</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<a href="">Learn more</a>
											</li>
											<li>
												<a href="">Apply now</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				{/* <!-- Sixth section ends here --> */}
			</>
		);
	}
}
