import React from "react";
import Layout from "../components/layout"
import Info from "../components/info"
import Seprator from "../components/seprator";
import About from   "../components/about"
import Skills from "../components/skills";

function Home () {
    return (
       <Layout>
        <main>
            <Info></Info>
            <Seprator text="Qui suis-je ?" />
            <About></About>
            <Seprator text="Mes compétences" />
            <Skills>
            </Skills>
        </main>
       </Layout>
    )
}

export default Home;