import React, { createRef, useRef } from 'react';

import { Provider } from 'react-redux'
import Header from './app/header/component/Header';
import { getResources } from './app/resources/resources';
import { store } from './app/store';
import styles from './App.less'
import Icon from './app/resources/Icon';
import Home from './app/home/component/Home';
import About from './app/aboutUs/component/About';
import Roadmap from './app/roadMap/Roadmap';
import Collection from './app/collection/Collection';
import Footer from './app/footer/Footer';
import Team from './app/ourTeam/Team';
import Faq from './app/faq/Faq';
import Mint from './app/mint/Mint';

function App() {
    const resources = getResources();
    const scrollRefs = useRef([]);
    scrollRefs.current = [...Array(5).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef());

    // Curried handler to take index and return click handler
    const scrollSmoothHandler = (index: number) =>  {
      console.log(scrollRefs);
      (scrollRefs.current[index] as any).current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <Provider store={store}>
        <Icon />
        <div className={styles.App}>
          <Header resources={resources.header} scrollSmoothHandler={scrollSmoothHandler} />
          <Home resources={resources.home} ref={scrollRefs.current[0]} />
          <About resources={resources.aboutUS} ref={scrollRefs.current[1]} />
          <Roadmap resources={resources.roadmap}/>
          <Collection ref={scrollRefs.current[2]} resources={resources.collection}/>
          <Mint resources={resources.mint}/>
          <Faq ref={scrollRefs.current[3]} resources={resources.faq} />
          <Team ref={scrollRefs.current[4]} resources={resources.team}/>
        </div>
        <Footer resources={resources.footer}/>
      </Provider>);
}

export default App;