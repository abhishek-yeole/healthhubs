import React, { useEffect, useRef } from 'react';
import Background from '../../Landing/Background/Background';
import Header from '../../Landing/Header/Header';

const Ml = () => {
    const gradioAppRef = useRef(null);
    useEffect(() => {
        const timerId = setTimeout(() => {
            const gradioAppElement = gradioAppRef.current;
                gradioAppElement.classList.remove('dark');
                gradioAppElement.classList.add('light');
        }, 1000);
        return () => clearTimeout(timerId);
    }, []);

    return (
        <div>
            <Header />
            <Background /><br /><br /><br /><br />
            <div style={{width: '95%', margin:'auto'}}>
                <gradio-app ref={gradioAppRef} src="http://127.0.0.1:7860/" class="light"></gradio-app>
            </div>
        </div>
    )
}

export default Ml;