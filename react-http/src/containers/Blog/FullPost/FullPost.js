import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null,
		postId: 0,
	};

	deletePostHandler = () => {
		axios.delete(`/posts/${this.props.id}`).then((response) => {
			console.log(response);
			this.setState({ loadedPost: null });
		});
	};

	componentDidMount() {
		const postId = +this.props.match.params.postId;

		if (postId) {
			this.setState({ postId });
		}
	}

	componentDidUpdate() {
		const postId = +this.props.match.params.postId;

		if (postId) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost && this.state.loadedPost.id !== postId)
			) {
				axios
					.get(`/posts/${postId}`)
					.then((response) => {
						console.log(response);
						this.setState({ loadedPost: response.data, postId });
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	}

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

		if (this.state.postId && !this.state.loadedPost) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>;
		}

		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button
							className="Delete"
							onClick={() => {
								this.deletePostHandler();
							}}
						>
							Delete
						</button>
					</div>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;
