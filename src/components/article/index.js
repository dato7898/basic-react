import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import CommentList from '../comment-list'
import './style.css'
import { deleteArticle, loadArticleById } from '../../ac'
import Loader from '../common/loader'
import { articleSelector } from '../../selectors'

class Article extends PureComponent {
	static propTypes = {
		article: PropTypes.shape({
			title: PropTypes.string,
			text: PropTypes.string
		}),
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	state = {
		hasError: false
	}

	componentDidCatch(err) {
		console.log('---', err)
		this.setState({
			hasError: true
		})
	}

	componentDidMount() {
		const { article, id, loadArticleById } = this.props
		if (!article || !article.text) {
			loadArticleById(id)
		}
	}

	render() {
		const { article, isOpen } = this.props
		return (
			<div>
				<h3>
					{article.title}
					<button onClick={this.handleClick} className="test__article--btn">
						{isOpen ? 'close' : 'open'}
					</button>
					<button onClick={this.handleDelete}>delete me</button>
				</h3>
				<CSSTransition
					transitionName="article"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{this.body}
				</CSSTransition>
			</div>
		)
	}

	handleClick = () => this.props.toggleOpen(this.props.article.id)

	handleDelete = () => {
		const { deleteArticle, article } = this.props
		deleteArticle(article.id)
	}

	get body() {
		const { isOpen, article } = this.props
		if (!isOpen) return null
		if (this.state.hasError) return <div>Some error in this article</div>
		if (article.loading) return <Loader />

		return (
			<section className="test__article--body">
				{article.text}
				<CommentList article={article} />
			</section>
		)
	}
}

export default connect(
	(state, props) => ({
    article: articleSelector(state, props)
  }),
	{ deleteArticle, loadArticleById }
)(Article)