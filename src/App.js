import { Home } from './pages/Home/Home';

import styles from './app.scss';
require(`./assets/themes/blue.scss`);

function App() {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
}

export default App;
