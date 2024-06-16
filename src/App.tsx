import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './Globalstyle';
import Router from './Router';
import {ReactQueryDevtools} from "react-query/devtools";
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <button onClick={toggleDark}>toggle</button>
    <GlobalStyle/>
    <Router/>
    <ReactQueryDevtools initialIsOpen={true}/>
    </ThemeProvider>
    </>
  );
}

export default App;
