import React, { useEffect, useRef } from 'react';
import Background from '../../Landing/Background/Background';
import Header from '../../Landing/Header/Header';

const Ml2 = () => {
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
                <gradio-app ref={gradioAppRef} src="https://abhicodes-cross-model-machine-learning-v2.hf.space" class="light"></gradio-app>
            </div>
        </div>
    )
}

export default Ml2;