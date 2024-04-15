import React from 'react';
import Header1 from './components/Header1';
import NewContainer from './components/NewContainer';
import PhotoContainer1 from './components/PhotoContainer1';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';
import MainContainer from './components/MainContainer';
import './index.css'; 

function App() {
    return (
        <div className="App">
            <Header1 />
            <NewContainer />
            <PhotoContainer1 />
            <SecondContainer />
            <ThirdContainer />
            <MainContainer />
        </div>
    );
}

export default App;
