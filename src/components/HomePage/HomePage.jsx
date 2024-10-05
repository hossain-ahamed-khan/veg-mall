import React from 'react';
import AllItems from './AllItems';
import Banner from './Banner';

const Home = () => {
    return (
        <div className="bg-slate-200 ">
            <Banner></Banner>
            <AllItems></AllItems>
        </div>
    );
};

export default Home;