import './App.css';
import AddCountry from './components/AddCountry';
import Header from './components/Header';
import countryView from './components/countryView';
import ColoredLine from './components/horizontalLine';
import AddPackage from './components/AddPackage';
import AllPackages from './components/AllPackages';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Editpackage from './components/editpackage';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <ColoredLine/>
      <Route path = "/all" exact component={AllPackages}></Route>
     <center> <table width={"70%"}>
        <tr>
          <td><Route path = "/add" exact component={AddCountry}></Route></td>
          <td><Route path = "/add" exact component={AddPackage}></Route></td>
        </tr>
      </table>
      </center>
      <Route path = "/CountryList" exact component={countryView}></Route>
      <Route path = "/packageedit/:id" component={Editpackage}></Route>
    </div>

    </Router>
   
  );
}

export default App;
