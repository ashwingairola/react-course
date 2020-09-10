import React from 'react';
import axios from '../../../axios';

import './Posts.css';
import Post from '../../../components/Post/Post';

class Posts extends React.Component {
	state = { posts: [] };

	postSelectedHandler = (id) => {
		this.setState({ selectedPostId: id });
	};

	postDeselectedHandler = () => {
		this.setState({ selectedPostId: null });
	};

	componentDidMount() {
		console.log(this.props);

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

		return <section className="Posts">{posts}</section>;
	}
}

export default Posts;
