import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import TitleElement from '../Components/TitleElement/TitleElement';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <TitleElement classes="content__title" titleElement="main-title" text="Пенопласт от производителя" />
        <TitleElement classes="content__title" titleElement="main-subtitle" text="и изделия из пенопласта" />
        <TitleElement classes="content__title" titleElement="section-title" text="Работаем официально. Имеем допуск." />
        <TitleElement
          classes="content__title"
          titleElement="catalog-title"
          text="Каталог товаров"
          style={{ backgroundColor: 'black' }}
        />
        <TitleElement
          classes="content__title"
          titleElement="section-subtitle"
          text="Получите расчет стоимости  пенопласта для вас в течении 20 минут"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
