import { Router, Route, Switch } from "react-router-dom";
import MainBody  from "./body/MainBody";
import MainHeader from "./header/MainHeader";
import MainNavi from "./navigation/MainNavi";
import GlobalStyles from "./GlobalStyles";
import history from "../history"
import '../style/index.css'

function App() {
  

  return (
    <>
      <MainHeader></MainHeader>
      <Router history={history} >
                <Switch>
                    <Route path="/" exact component = {MainBody}></Route>
                  
                </Switch>
      </Router>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;
