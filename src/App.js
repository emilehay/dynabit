import { Home } from './pages/Home/Home';
import { Menu } from './components';

import styles from './app.scss';
require(`./assets/themes/blue.scss`);

function App() {
  return (
    <div className={styles.app}>
      <Home />
      <Menu />
    </div>
  );
}

export default App;
