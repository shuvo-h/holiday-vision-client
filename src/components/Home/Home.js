import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Destinations from '../Destinations/Destinations';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div id="home">
            <div>
                <Banner></Banner>
            </div>
            <div id="packages">
                <Packages></Packages>
            </div>
            <div id="blogs">
                <Blogs></Blogs>
            </div>
            <div id="destination">
                <Destinations></Destinations>
            </div>
            
        </div>
    );
};

export default Home;

