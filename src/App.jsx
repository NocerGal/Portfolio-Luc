import { Theme } from '@radix-ui/themes';
import Presentation from './Components/Presentation';
import { ThemeProvider } from './Context/ThemeContext';
import Header from './Layouts/Header';
import '@radix-ui/themes/styles.css';
import Contact from './Components/Form';

function App() {
  return (
    <ThemeProvider>
      <Theme accentColor="blue" panelBackground="solid">
        <div className="animation-wrapper ">
          <div className="particle particle-1 "></div>
        </div>
        <Header />
        <Presentation />
        <Contact />
      </Theme>
    </ThemeProvider>
  );
}

export default App;
