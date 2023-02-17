import { RouterConfig } from './router/Config';
import { MainContainer, GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <RouterConfig />
      </MainContainer>    
    </>
  );
}

export default App;
