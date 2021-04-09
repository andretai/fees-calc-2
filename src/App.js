import Transactions from './pages/Transactions';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';

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
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Transactions/>
    </ThemeProvider>
  );
}

export default App;
