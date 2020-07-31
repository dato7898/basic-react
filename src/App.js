import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import UserForm from './components/user-form'
import Filters from './components/filters/index'
import Counter from './components/counter'

class App extends Component {
	render() {
		return (
			<div>
				<UserForm />
				<Counter />
				<Filters articles={articles} />
				<ArticleList articles={articles} />
			</div>
		)
	}
}

export default App;
