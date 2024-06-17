import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './Globalstyle';
import Router from './Router';
import {ReactQueryDevtools} from "react-query/devtools";
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

function App() {
  
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <GlobalStyle/>
    <Router/>
    <ReactQueryDevtools initialIsOpen={true}/>
    </ThemeProvider>
    </>
  );
}

export default App;
