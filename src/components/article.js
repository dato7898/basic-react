import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {

	state = {
		hasError: false
	}

	componentDidCatch(err) {
		console.log('---', err)
		this.setState({
			hasError: true
		})
	}

	render() {
		const { article, isOpen } = this.props
		return (
			<div>
				<h3>
					{article.title}
					<button onClick={this.handleClick}>
						{isOpen ? 'close' : 'open'}
					</button>
				</h3>
				{this.body}
			</div>
		)
	}

	handleClick = () => this.props.toggleOpen(this.props.article.id)

	get body() {
		const { isOpen, article } = this.props
		if (!isOpen) return null
		if (this.state.hasError) return <div>Some error in this article</div>

		return (
			<section>
				{article.text}
				<CommentList comments={article.comments} />
			</section>
		)
	}
}

export default Article