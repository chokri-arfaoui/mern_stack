// import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
import CreateForm from './components/CreateForm'
import ProductsList from './components/ProductList'
import ProductOne from './components/ProductOne'

function App() {
  return (
    <div className="container">
      <h1>Products Manager</h1>
      <Routes>
          <Route path='/products/new'element={<CreateForm />} />
          <Route path='/products'element={<ProductsList />} />
          <Route path='/products/:id' element={<ProductOne />} />
          <Route path='*' element={<Navigate to='/products' replace/>}/>

      </Routes>

    </div>
  )
}

export default App