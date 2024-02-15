import { getdata } from "./Utils/axios"
import { useEffect, useState } from 'react';
import HeroNav from './Layout/Layout1/HeroNav';
import Body from './Layout/Layout1/Body';

function App() {

  const [db, setDb] = useState([])
  const [cartdb, setCartdb] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  console.log(db, "DB",cartdb,"cart")

  useEffect(() => {
    setLoading(false)
    getdata.data()
      .then((res) => {
        setDb(res.data)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err, "error")
        setError(err.message)
      })
  }, [])

  useEffect(() => {
    getdata.cart().then((res) => {
      setCartdb(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <HeroNav db={db} setDb={setDb} />
      {
        error ? (<h1>{error}</h1>) : (loading ? (
          <Body db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb}/>
        ) : (<h1>loading.......</h1>))
      }
    </div >
  );
}

export default App;
