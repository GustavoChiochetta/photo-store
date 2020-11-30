import React, { useState } from 'react';
import Login from './pages/Login';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Main from './pages/Main';
import PhotoPage from './pages/PhotoPage'
import AddImage from './pages/AddImage';
import NavBar from './components/NavBar';
import SimpleModal from './components/SimpleModal';
import Footer from './components/Footer';

const App = () => {
  const [openModa, SetOpenModal] = useState(false);
  const [render, setRender] = useState(false);

  const reRender = () => {
    setRender(!render);
  }

  return (
    <div>
      <HashRouter>
        <NavBar openModal={SetOpenModal} reRender={reRender} />
        <SimpleModal modalVisible={openModa} setModalVisible={SetOpenModal} />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/photo-page" component={PhotoPage} />
          <Route path="/add-image" component={AddImage} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
