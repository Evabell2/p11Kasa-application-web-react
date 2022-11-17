import '../style/Home.css'
import CardList from "../Components/CardList"

function Home({logements}) {
  return (
    <div>
      <div className='banner'>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <CardList logements={logements} />
    </div>
  )
}
  
export default Home