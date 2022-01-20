import React from 'react';
import { hot } from 'react-hot-loader';
import configureStore from '../store/configureStore';
import { Math1 } from './sum';

window.BizCharts.track(false);

const App = class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = configureStore();
  }

  render() {
    return (
      <Math1 />

    // <Provider store={this.store}>

    //   <Mnist />
    // </Provider>
    );
  }
};

export default hot(module)(App);
