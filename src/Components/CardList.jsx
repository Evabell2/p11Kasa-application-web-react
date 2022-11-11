import logements from "../data/logements.json"
import Card from "../Components/Card"
import { Link } from "react-router-dom"

function CardList() {
    return (
        <ul className='card-list'>
            {logements.map(({ id, title, cover }) => (
                <Link to={"/logement/"+id} key={id}>
                    <Card
                        cover={cover}
                        title={title}
                    />
                </Link>
            ))}
        </ul>
	)
}

export default CardList