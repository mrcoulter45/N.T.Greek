import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';

// components
import Home from './components/Home';
import Alphabet from './components/Alphabet';
import Vowels from './components/Vowels';
import Punctuation from './components/Punctuation';
import Accent from './components/Accent';
import FirstDeclension from './components/FirstDeclension';
import SecondDeclension from './components/SecondDeclension';
import ThirdDeclension from './components/ThirdDeclension';
import Adjectives from './components/Adjectives';
import Article from './components/Article';
import PersonalPronouns from './components/PersonalPronouns';
import DemonstrativePronouns from './components/DemonstrativePronouns';
import Eiui from './components/Eiui';
import GenitiveAbsolute from './components/GenitiveAbsolute';
import ContractVerbs from './components/ContractVerbs';
import FutureLiquidVerbs from './components/FutureLiquidVerbs';

function App() {
  return (
    <Router>


      <div className="side-bar">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem><h3>Home</h3> <Link to="/" /></MenuItem>
            <MenuItem>Alphabet <Link to="/alphabet" /></MenuItem>
            <MenuItem>Vowels <Link to="/vowels" /></MenuItem>
            <MenuItem>Punctuation <Link to="/punctuation" /></MenuItem>
            <MenuItem>Accent <Link to="/accent" /></MenuItem>
            <MenuItem>1st Declension <Link to="/firstdeclension" /></MenuItem>
            <MenuItem>2nd Declension <Link to="/seconddeclension" /></MenuItem>
            <MenuItem>3rd Declension <Link to="/thirddeclension" /></MenuItem>
            <MenuItem>Adjectives <Link to="/adjectives" /></MenuItem>
            <MenuItem>Article <Link to="/article" /></MenuItem>
            <MenuItem>Personal Pronouns <Link to="/personalpronouns" /></MenuItem>
            <MenuItem>Demonstrative Pronouns <Link to="/demonstrativepronouns" /></MenuItem>
            <MenuItem>είμί <Link to="/eiui" /></MenuItem>
            <MenuItem>Genitive Absolute <Link to="/genitiveabsolute" /></MenuItem>
            <MenuItem>Contract Verbs <Link to="/contractverbs" /></MenuItem>
            <MenuItem>Future Liquid Verbs <Link to="/futureliquidverbs" /></MenuItem>
          </Menu>
        </ProSidebar>
      </div>



      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/alphabet">
            <Alphabet />
          </Route>
          <Route exact path="/vowels">
            <Vowels />
          </Route>
          <Route exact path="/punctuation">
            <Punctuation />
          </Route>
          <Route exact path="/accent">
            <Accent />
          </Route>
          <Route exact path="/firstdeclension">
            <FirstDeclension />
          </Route>
          <Route exact path="/seconddeclension">
            <SecondDeclension />
          </Route>
          <Route exact path="/thirddeclension">
            <ThirdDeclension />
          </Route>
          <Route exact path="/adjectives">
            <Adjectives />
          </Route>
          <Route exact path="/article">
            <Article />
          </Route>
          <Route exact path="/personalpronouns">
            <PersonalPronouns />
          </Route>
          <Route exact path="/demonstrativepronouns">
            <DemonstrativePronouns />
          </Route>
          <Route exact path="/eiui">
            <Eiui />
          </Route>
          <Route exact path="/genitiveabsolute">
            <GenitiveAbsolute />
          </Route>
          <Route exact path="/contractverbs">
            <ContractVerbs />
          </Route>
          <Route exact path="/futureliquidverbs">
            <FutureLiquidVerbs />
          </Route>
        </Switch>
      </div>



    </Router>
  );
}

export default App;
