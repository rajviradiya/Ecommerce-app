import { getdata } from "./Utils/axios"
import { useEffect, useState } from 'react';
import Cart from "./pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/Fiilter/Firstpage";
import ProductPage from "./pages/ProductPage/ProductPage";
import RouteWrapper from "./pages/Components/RouteWrapper";
import FilterProduct from "./pages/Fiilter/FilterProduct";

function App() {
  const [db, setDb] = useState([])//Product DB
  const [cartdb, setCartdb] = useState([])//cart DB
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  console.log(db, "DB", cartdb, "cart")
  //Product
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

  //Cart
  useEffect(() => {
    getdata.cart().then((res) => {
      setCartdb(res.data)
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <RouteWrapper db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} error={error} loading={loading}>
              <Firstpage db={db} setDb={setDb} />
            </RouteWrapper>
          } />
          <Route path='/:category' element={
            <RouteWrapper db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} error={error} loading={loading}>
                <FilterProduct db={db} setDb={setDb} />
            </RouteWrapper>
          } />
          <Route path='/productpage/:id' element={
            <RouteWrapper db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} error={error} loading={loading}>
              <ProductPage db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} />
            </RouteWrapper>
          } />
          <Route path="/cart" element={
            <RouteWrapper db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} error={error} loading={loading}>
              <Cart db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb}  />
            </RouteWrapper>
          } />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
