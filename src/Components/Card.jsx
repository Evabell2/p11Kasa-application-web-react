function Card({ cover, title }) {
	return (
		<li className='card'>
			<h2>{title}</h2>
			<img src={cover} alt={title} />
		</li>
	)
}
export default Card