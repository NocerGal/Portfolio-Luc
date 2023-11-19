import { Theme } from '@radix-ui/themes';
import Presentation from './Components/Presentation';
import { ThemeProvider } from './Context/ThemeContext';
import Header from './Layouts/Header';
import '@radix-ui/themes/styles.css';
import Contact from './Components/Form';
import Description from './Components/Description';
import Realisations from './Components/Realisations';
import Footer from './Layouts/Footer';

function App() {
  const copyEmailToClipBoard = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      console.error('Failed to copy email');
    }
  };

  return (
    <ThemeProvider>
      <Theme
        className="bg-blue-2 dark:bg-bluedark-2"
        accentColor="blue"
        panelBackground="solid"
      >
        <div className="animation-wrapper ">
          <div className="particle particle-1 "></div>
        </div>
        <Header />
        <main>
          <Presentation />
          <Description />
          <Realisations />
          <Contact copyMail={copyEmailToClipBoard} />
        </main>
        <Footer />
      </Theme>
    </ThemeProvider>
  );
}

export default App;
