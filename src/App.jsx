import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products';

import Product from './pages/Product';
import NotFoundPage from './pages/notFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
