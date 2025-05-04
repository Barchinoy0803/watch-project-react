import './App.scss'
import Brands from './components/Brands/Brands'
import Comments from './components/Comments/Comments'
import Footer from './components/Header/Footer/Footer'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Subscription from './components/Subscription/subscription'

function App() {

  return (
    <>
      <Header />
      <Brands />
      <Products />
      <Comments />
      <Subscription/>
      <Footer/>
    </>
  )
}

export default App
