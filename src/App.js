import { getdata } from "./Utils/axios"
import { useEffect, useState } from 'react';
import HeroNav from './Layout/HeroNav';
import Body from './Layout/Body';

function App() {

  const [db, setDb] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  console.log(db, "DB")

  useEffect(() => {
    setLoading(false)
    getdata.data()
      .then((res) => {
        setDb(res.data.products)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err, "error")
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <HeroNav db={db} setDb={setDb} />
      {
        error ? (<h1>{error}</h1>) : (loading ? (
          <Body db={db} setDb={setDb} />
        ) : (<h1>loading.......</h1>))
      }
    </div >
  );
}

export default App;
