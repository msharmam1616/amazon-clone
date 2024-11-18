
import './App.css';
import { MainPage } from './components/Main Page/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './components/SignUpPage/SignUp';
import { AddProduct } from './components/Misc/AddProduct';
import { RecoilRoot } from 'recoil';
import { ProductPage } from './components/Product Page/ProductPage';
import {ProductSearchPage} from './components/Product Search Page/ProductSearchPage';
import { Cart } from './components/Cart/Cart';

function App() {

  return (
    <div className='font-display h-full'>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
           <Route path='/main' element={<MainPage></MainPage>}></Route>
           <Route path='/' element={<SignUp></SignUp>}></Route>
           <Route path='/product' element={<ProductPage/>}></Route>
           <Route path='main/addProduct' element={
            <RecoilRoot>
           <AddProduct></AddProduct>
           </RecoilRoot>
           }></Route>
           <Route path='main/product' element= {
              <ProductPage></ProductPage>
           }/>
           <Route path='main/productSearch' element= {
              <ProductSearchPage></ProductSearchPage>
           }/>
           <Route path='main/cart' element ={
              <Cart></Cart>
           }/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
