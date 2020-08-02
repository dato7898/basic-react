import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'
import CommentsPage from './components/routes/comments-page'
import Menu, { MenuItem } from './components/menu'

class App extends Component {
	render() {
		return (
			<div>
				<UserForm />
				<Menu>
          <MenuItem path="/counter">Counter</MenuItem>
          <MenuItem path="/filters">Filters</MenuItem>
          <MenuItem path="/articles">Articles</MenuItem>
          <MenuItem path="/comments">Comments</MenuItem>
        </Menu>
				<Switch>
					<Redirect from="/" to="/articles" exact />
					<Route path="/counter" component={Counter} />
					<Route path="/filters" component={Filters} />
					<Route
            path="/articles/new"
            render={() => <h1>New Article Page</h1>}
          />
					<Route path="/articles" component={ArticlesPage} />
					<Route path="/comments" component={CommentsPage} />
					<Route path="/error" render={() => <h1>Error Page</h1>} />
					<Route path="*" render={() => <h1>Not Found Page</h1>} />
				</Switch>
			</div>
		)
	}
}

export default App;
