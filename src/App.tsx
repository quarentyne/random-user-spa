import { Suspense } from 'react';
import { RouterConfig } from './router/Config';
import { Loader } from './shared/components/Loader/Loader';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <RouterConfig />
    </Suspense>
  );
}

export default App;
