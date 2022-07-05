import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import TitleElement from '../Components/TitleElement/TitleElement';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <TitleElement titleElement="main-title" text="Пенопласт от производителя" />
        <TitleElement titleElement="main-subtitle" text="и изделия из пенопласта" />
        <TitleElement titleElement="section-title" text="Работаем официально. Имеем допуск." />
        <TitleElement titleElement="catalog-title" text="Каталог товаров" style={{backgroundColor: 'black'}}/>
        <TitleElement
          titleElement="section-subtitle"
          text="Получите расчет стоимости  пенопласта для вас в течении 20 минут"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
