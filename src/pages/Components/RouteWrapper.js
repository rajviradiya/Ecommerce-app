import React from 'react'
import HeroNav from '../../Layout/Layout1/HeroNav';
import Nav2 from './Nav2';

const RouteWrapper = ({ db, setDb, cartdb, setCartdb, error, loading, children }) => {

    return (
        <div>
            <HeroNav db={db} setDb={setDb} cartdb={cartdb} setCartdb={setCartdb} />
            <Nav2 />
            {error ? (
                <h1>{error + ''}</h1>
            ) : loading ? (
                children
            ) : (
                <h1>loading.......</h1>
            )}
        </div>
    );
}

export default RouteWrapper