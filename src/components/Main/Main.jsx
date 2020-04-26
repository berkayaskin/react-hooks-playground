import React, {useEffect, useState} from 'react';
import {MainWrapper} from './Main.style';

function Main() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        document.title = width < 600 ? "It's too small!" : "It's ok";
        return () => (document.title = '');
    }, [width]);


    /*componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        document.title = this.getTitle();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.width !== this.state.width) {
            document.title = this.getTitle();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.title = '';
    }*/

    return (
        <MainWrapper>
            <h2>EX5_useEffect_intermediate</h2>
            <p>{`the width is: ${width}`}</p>
        </MainWrapper>
    );
}

export default Main;
