import '../style/Home.css'
import CardList from "../Components/CardList"

function Home() {
    return (
      <div>
        <div className='banner'>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <CardList />
      </div>
    )
}
  
export default Home