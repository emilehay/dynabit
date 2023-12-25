import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import { Calendar, Habits, Home, Settings, Stats } from "./pages";
import { Menu } from "./components";

import "@ionic/react/css/core.css";
import styles from "./app.scss";
import { Drawer } from "./components/Drawer/Drawer";
require(`./assets/themes/blue.scss`);

setupIonicReact();

const App = () => (
  <div className={styles.app}>
    <Drawer />
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {["/", "/home"].map((path) => (
            <Route path={path} component={Home} exact={true} />
          ))}
          <Route path="/home" component={Home} exact={true} />
          <Route path="/habits" component={Habits} exact={true} />
          <Route path="/calendar" component={Calendar} exact={true} />
          <Route path="/stats" component={Stats} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    <Menu />
  </div>
);
export default App;
