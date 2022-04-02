import React from 'react';

import { Provider } from 'react-redux'
import HeaderContainer from './app/header/HeaderContainer';
import { getResources } from './app/resources/resources';
import { store } from './app/store';


function App() {
    const resources = getResources();
    return (
      <Provider store={store}>
        <HeaderContainer resources={resources.header} />
      </Provider>);
}

export default App;