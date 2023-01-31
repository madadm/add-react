import {Route, Switch} from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
    return (

      <Layout>
            <Switch>
                <Route path='/' exact> <AllMeetup/></Route>
                <Route path='/new-meetups'><NewMeetups/></Route>
                <Route path='/favorites'><Favorites/></Route>
            </Switch>
      </Layout>

    );
}

export default App;
