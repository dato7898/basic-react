import React, { Component } from 'react'
import ArticleList from './components/article-list'
import { Route, NavLink } from 'react-router-dom'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'

class App extends Component {
	render() {
		return (
			<div>
				<UserForm />
				<div>
					<div>
						<NavLink to="/counter" activeStyle={{color: 'red'}}>
							counter
						</NavLink>
					</div>
					<div>
						<NavLink to="/filters" activeStyle={{color: 'red'}}>
							filters
						</NavLink>
					</div>
					<div>
						<NavLink to="/articles" activeStyle={{color: 'red'}}>
							articles
						</NavLink>
					</div>
				</div>
				<Route path="/counter" component={Counter} />
				<Route path="/filters" component={Filters} />
				<Route path="/articles" component={ArticleList} />
			</div>
		)
	}
}

export default App;
