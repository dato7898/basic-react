import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
	render() {
		const articleElements = this.props.articles.map(article => <li><Article article = {article}/></li>)
		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
}

export default ArticleList