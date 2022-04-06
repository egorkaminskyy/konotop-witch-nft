import React from 'react';

import { Provider } from 'react-redux'
import HeaderContainer from './app/header/HeaderContainer';
import { getResources } from './app/resources/resources';
import { store } from './app/store';
import styles from './App.less'
import Icon from './app/resources/Icon';
import Home from './app/home/HomeContainer';
import About from './app/aboutUs/AboutContainer';
import Roadmap from './app/roadMap/Roadmap';
import Collection from './app/collection/Collection';
import Footer from './app/footer/Footer';
import Team from './app/ourTeam/Team';
import Faq from './app/faq/Faq';
import Mint from './app/mint/Mint';

function App() {
    const resources = getResources();
    return (
      <Provider store={store}>
        <Icon />
        <div className={styles.App}>
          <HeaderContainer resources={resources.header} />
          <Home resources={resources.home} />
          <About resources={resources.aboutUS} />
          <Roadmap resources={resources.roadmap}/>
          <Collection resources={resources.collection}/>
          <Mint resources={resources.mint}/>
          <Faq resources={resources.faq} />
          <Team resources={resources.team}/>
        </div>
        <Footer resources={resources.footer}/>
      </Provider>);
}

export default App;