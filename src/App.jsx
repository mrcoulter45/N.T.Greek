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
import DemonstrativeAdjectives from './components/DemonstrativeAdjectives';
import Eiui from './components/εἰμί';
import GenitiveAbsolute from './components/GenitiveAbsolute';
import ContractVerbs from './components/ContractVerbs';
import FutureLiquidVerbs from './components/FutureLiquidVerbs';
import ReflexivePronouns from './components/ReflexivePronouns';
import ReciprocalPronoun from './components/ReciprocalPronoun';
import Pas from './components/Pas';
import Numerals from './components/Numerals';
import InterrogativeAndIndefinitePronouns from './components/InterrogativeAndIndefinitePronouns';
import RelativePronoun from './components/RelativePronoun';
import GenitiveOfComparison from './components/GenitiveOfComparison';
import ImperativeMood from './components/ImperativeMood';
import Verbs from './components/Verbs';
import Participles from './components/Participles';
import VerbsInUi from './components/VerbsInUi';
import Nouns from './components/Nouns';
import Prepositions from './components/Prepositions';
import Conjunctions from './components/Conjunctions';
import History from './components/History';
import SpecialWords from './components/SpecialWords';

function App() {
  return (
    <Router>


      <div className="side-bar">
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem><h3>Home</h3> <Link to="/" /></MenuItem>
            <MenuItem>1st Declension <Link to="/firstdeclension" /></MenuItem>
            <MenuItem>2nd Declension <Link to="/seconddeclension" /></MenuItem>
            <MenuItem>3rd Declension <Link to="/thirddeclension" /></MenuItem>
            <MenuItem>Accent <Link to="/accent" /></MenuItem>
            <MenuItem>Adjectives <Link to="/adjectives" /></MenuItem>
            <MenuItem>Alphabet <Link to="/alphabet" /></MenuItem>
            <MenuItem>Article <Link to="/article" /></MenuItem>
            <MenuItem>Conjunctions <Link to="/conjunctions" /></MenuItem>
            <MenuItem>Contract Verbs <Link to="/contractverbs" /></MenuItem>
            <MenuItem>Demonstrative Adjectives <Link to="/Demonstrativeadjectives" /></MenuItem>
            <MenuItem>εἰμί <Link to="/εἰμί" /></MenuItem>
            <MenuItem>Future Liquid Verbs <Link to="/futureliquidverbs" /></MenuItem>
            <MenuItem>Genitive Absolute <Link to="/genitiveabsolute" /></MenuItem>
            <MenuItem>Genitive of Comparison <Link to="/genitiveofcomparison" /></MenuItem>
            <MenuItem>History <Link to="/history" /></MenuItem>
            <MenuItem>Imperative Mood <Link to="/imperativemood" /></MenuItem>
            <MenuItem>Interrogative/Indefinite Pronouns <Link to="/interrogativeandindefinitepronouns" /></MenuItem>
            <MenuItem>Nouns <Link to="/nouns" /></MenuItem>
            <MenuItem>Numerals <Link to="/numerals" /></MenuItem>
            <MenuItem>Participles <Link to="/participles" /></MenuItem>
            <MenuItem>πᾶς <Link to="/pas" /></MenuItem>
            <MenuItem>Personal Pronouns <Link to="/personalpronouns" /></MenuItem>
            <MenuItem>Prepositions <Link to="/prepositions" /></MenuItem>
            <MenuItem>Punctuation <Link to="/punctuation" /></MenuItem>
            <MenuItem>Reciprocal Pronoun <Link to="/reciprocalpronoun" /></MenuItem>
            <MenuItem>Reflexive Pronouns <Link to="/reflexivepronouns" /></MenuItem>
            <MenuItem>Relative Pronoun <Link to="/relativepronoun" /></MenuItem>
            <MenuItem>Special Words <Link to="/specialwords" /></MenuItem>
            <MenuItem>Verbs <Link to="/verbs" /></MenuItem>
            <MenuItem>Verbs In μι <Link to="/verbsinui" /></MenuItem>
            <MenuItem>Vowels <Link to="/vowels" /></MenuItem>
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
          <Route exact path="/demonstrativeadjectives">
            <DemonstrativeAdjectives />
          </Route>
          <Route exact path="/εἰμί">
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
          <Route exact path="/reflexivepronouns">
            <ReflexivePronouns />
          </Route>
          <Route exact path="/reciprocalpronoun">
            <ReciprocalPronoun />
          </Route>
          <Route exact path="/pas">
            <Pas />
          </Route>
          <Route exact path="/numerals">
            <Numerals />
          </Route>
          <Route exact path="/interrogativeandindefinitepronouns">
            <InterrogativeAndIndefinitePronouns />
          </Route>
          <Route exact path="/relativepronoun">
            <RelativePronoun />
          </Route>
          <Route exact path="/genitiveofcomparison">
            <GenitiveOfComparison />
          </Route>
          <Route exact path="/imperativemood">
            <ImperativeMood />
          </Route>
          <Route exact path="/verbs">
            <Verbs />
          </Route>
          <Route exact path="/participles">
            <Participles />
          </Route>
          <Route exact path="/verbsinui">
            <VerbsInUi />
          </Route>
          <Route exact path="/nouns">
            <Nouns />
          </Route>
          <Route exact path="/prepositions">
            <Prepositions />
          </Route>
          <Route exact path="/conjunctions">
            <Conjunctions />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/specialwords">
            <SpecialWords />
          </Route>
        </Switch>
      </div>



    </Router>
  );
}

export default App;
