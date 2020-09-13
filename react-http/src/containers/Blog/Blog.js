import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    // One way of route-guarding.
	// state = {
	// 	auth: true,
	// };

	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									to="/posts"
									exact
									activeClassName="my-active"
									activeStyle={{
										color: '#fa923f',
										textDecoration: 'underline',
									}}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true',
									}}
									exact
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>

				<Switch>
                    {/* One way of route-guarding. */}
					{/* {this.state.auth ? (
						<Route path="/new-post" component={NewPost} />
					) : null} */}
                    <Route path="/new-post" component={NewPost} />
					<Route path="/posts" component={Posts} />
					<Redirect from="/" to="/posts" />
				</Switch>
			</div>
		);
	}
}

export default Blog;
