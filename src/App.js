import React from "react";

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import Page from "./components/Page";

const App = () => (
    <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <Page />
        <FindUs />
        <Footer />
    </div>
);

export default App;
