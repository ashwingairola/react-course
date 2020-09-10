import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = { posts: [], selectedPostId: null, error: false };

	postSelectedHandler = (id) => {
		this.setState({ selectedPostId: id });
	};

	postDeselectedHandler = () => {
		this.setState({ selectedPostId: null });
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map((post) => ({
					...post,
					author: 'Golu',
				}));
				this.setState({ posts: updatedPosts });
			})
			.catch((error) => {
				// console.log(error);
				this.setState({ error: true });
			});
	}

	render() {
		let posts = (
			<p style={{ textAlign: 'center' }}>Something went wrong!</p>
		);

		if (!this.state.error) {
			posts = this.state.posts.map((post) => (
				<Post
					key={post.id}
					title={post.title}
					author={post.author}
					clicked={() => this.postSelectedHandler(post.id)}
				/>
			));
		}

		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost
						id={this.state.selectedPostId}
						postDeleted={this.postDeselectedHandler}
					/>
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
