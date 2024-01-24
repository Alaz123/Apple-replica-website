import React, { Component } from "react";


export default class Sectionprops extends Component {
	render() {
		let titleclass = "title-wraper bold";
		let titleclassadd = this.props.tadd;
		let titlefullclass = titleclass + " " + titleclassadd;

		let descclass = "description-wrapper";
		let descclassadd = this.props.dadd;
		let descfullclass = descclass + " " + descclassadd;

		let priceclass = "price-wrapper";
		let priceclassadd = this.props.padd;
		let pricefullclass = priceclass + " " + priceclassadd;

		return (
			<section className={this.props.classn}>
                <div className="container">
                    

				{ this.props.new &&	<div className="new-alert">{this.props.new}</div>}

					<div className={titlefullclass}>{this.props.product}</div>

					{this.props.desc && (
						<div className={descfullclass}>{this.props.desc}</div>
					)}
					{this.props.price && (
						<div className={pricefullclass}>{this.props.price}</div>
					)}

					<div className="links-wrapper">
						<ul>
							<li>
								<a href="">Learn more</a>
							</li>
							<li>
								<a href="">{this.props.Purchase}</a>
							</li>
						</ul>
					</div>

					{this.props.ipad && (
						<div className="ipod-caption row">
							<div className="col-sm-12 col-md-6 text-md-right">
								{this.props.ipad}
							</div>
							<div className="col-sm-12 col-md-6 text-md-left">
								Magic Keyboard coming in May
							</div>
						</div>
					)}
				</div>
			</section>
				

		);
	}
}
