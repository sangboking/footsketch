import {createGlobalStyle} from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    font:inherit;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
