import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Destinations from '../Destinations/Destinations';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <div>
                <Packages></Packages>
            </div>
            <div>
                <Blogs></Blogs>
            </div>
            <div>
                <Destinations></Destinations>
            </div>
            <Banner></Banner>
        </div>
    );
};

export default Home;

