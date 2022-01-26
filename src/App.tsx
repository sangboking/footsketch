import {createGlobalStyle} from 'styled-components';
import Router from './Router';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  *{
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
    font-family: 'Source Sans Pro', sans-serif;
    ${reset};
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
