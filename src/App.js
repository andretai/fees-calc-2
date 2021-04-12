import Transactions from './pages/Transactions';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Header from './components/Header';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4ecdc4',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#ffe66d'
      }
    },
    typography: {
      fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Transactions/>
    </ThemeProvider>
  );
}

export default App;
