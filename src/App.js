
import './App.css';
import  Header from './Header/Header.js'
import Menu from './Menu/Menu.js'
import  './pizzas/Pizza.js'
import PizzaList from './Pizza_list/Pizza_list.js';
import Footer_page from './Footer/Footer_page.js';


 function App () {
  return (
    <>
    <Header/>
    <Menu/>
    <PizzaList/>
    <Footer_page/>
    </>
  )
 }

export default App;
