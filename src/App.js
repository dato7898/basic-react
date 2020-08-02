import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './components/routes/articles'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'
import CommentsPage from './components/routes/comments-page'

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
					<div>
            <NavLink to="/comments/1" activeStyle={{ color: 'red' }}>
              comments
            </NavLink>
          </div>
				</div>
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
