import React, { Component } from "react";
import CSSTransition from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import toggleOpen from '../../decorators/toggleOpen'
import Comment from '../comment'
import './style.css'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen} className="test__comment-list--btn">
                    {text}
                </button>
                <CSSTransition
					transitionName="comments"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null

        return (
            <div className="test__comment-list--body">
                {(comments && comments.length) ? (
                    this.comments
                ) : (
                    <h3 className="test__comment-list--empty">No comments yet</h3>
                )}
            </div>
        )
    }

    get comments() {
        return (
            <ul>
                {this.props.comments.map(id => (
                    <li key={id} className="test__comment-list--item">
                        <Comment id={id} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)