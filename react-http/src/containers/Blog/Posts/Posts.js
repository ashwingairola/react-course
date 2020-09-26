import React from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';

import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends React.Component {
	state = { posts: [], error: false };

	postSelectedHandler = (postId) => {
		this.props.history.push(`/posts/${postId}`);
		// this.props.history.push({ pathname: `/posts/${postId}` });
	};

	componentDidMount() {
		axios
			.get('/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map((post) => ({
					...post,
					author: 'Golu',
				}));
				this.setState({ posts: updatedPosts });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error: true });
			});
	}

	render() {
		let posts = (
			<p style={{ textAlign: 'center' }}>Something went wrong!</p>
		);

		if (!this.state.error) {
			posts = this.state.posts.map((post) => (
				// <Link to={`/${post.id}`} key={post.id}>
				<Post
					key={post.id}
					title={post.title}
					author={post.author}
					clicked={() => {
						this.postSelectedHandler(post.id);
					}}
				/>
				// </Link>
			));
		}

		return (
			<div>
				<section className="Posts">{posts}</section>
				<Route
					path={`${this.props.match.url}/:postId`}
					exact
					component={FullPost}
				/>
			</div>
		);
	}
}

export default Posts;
