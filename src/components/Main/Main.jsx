import React, {useState, useEffect} from 'react';
import {MainWrapper} from './Main.style';
import fetchData from '../../services/APIService';

function Main() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData().then(response => setData({ data: response.data }));
    }, []);

    return (
        <MainWrapper>
            <h2>EX4_useEffect_basic</h2>
            <p>{`the data is: ${JSON.stringify(data)}`}</p>
        </MainWrapper>
    );
}

export default Main;
