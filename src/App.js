import './constants/base.sass';
import './App.scss';
import Hero from './sections/hero/hero';
import Bloc01 from './sections/bloc-01/bloc-01';
import Bloc02 from './sections/bloc-02/bloc-02';
import Bloc03 from './sections/bloc-03/bloc-03';
import Bloc04 from './sections/bloc-04/bloc-04';
import Bloc05 from './sections/bloc-05/bloc-05';
import Bloc06 from './sections/bloc-06/bloc-06';
import Bloc07 from './sections/bloc-07/bloc-07';
import Bloc08 from './sections/bloc-08/bloc-08';

function App() {
  return (
    <div className="App">
      <Hero />
      <Bloc01 />
      <Bloc02 />
      <Bloc03 />
      <Bloc04 />
      <Bloc05 />
      <Bloc06 />
      <Bloc07 />
      <Bloc08 />
    </div>
  );
}

export default App;
