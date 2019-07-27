import React from "react";

export default class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	render() {
		return (
			<div
				className="search-bar ui segment "
				style={{ opacity: 0.8, background: "#4e676c" }}
			>
				<form
					className="ui form"
					style={{ textAlign: "center" }}
					onSubmit={this.onFormSubmit}
				>
					<div className="field">
						<label
							style={{ fontWeight: "bold", fontSize: "1.2em" }}
						>
							Video Search
						</label>
						<input
							type="text"
							placeholder="Search..."
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
