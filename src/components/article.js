import React from 'react'

function Article({ article, isOpen }) {
	return (
		<div>
			<h3>{article.title}</h3>
			{isOpen && <section>{article.text}</section>}
		</div>
	)
}

export default Article