import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProspectSet from "./pages/ProspectSet";
import Campaign from "./pages/Campaign";
import EmailTemplate from "./pages/EmailTemplate";
import AddProspect from "./components/content/AddProspect";
import EditProspect from "./components/content/EditProspect";
import TriggerEvent from "./pages/TriggerEvent ";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <ProspectSet />
        </Route>
        <Route path="/campaign" exact>
          <Campaign />
        </Route>
        <Route path="/email-template" exact>
          <EmailTemplate />
        </Route>
        <Route path="/trigger-event" exact>
          <TriggerEvent />
        </Route>

        <Route path="/add-prospect" exact>
          <AddProspect />
        </Route>
        <Route path="/edit-prospect/:id" exact>
          <EditProspect />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
