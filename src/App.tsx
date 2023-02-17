import { Suspense } from 'react';
import { RouterConfig } from './router/Config';
import { Loader } from './shared/components/Loader/Loader';
import { MainContainer, GlobalStyle } from './styles';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <MainContainer>
        <RouterConfig />
      </MainContainer>      
    </Suspense>
  );
}

export default App;
