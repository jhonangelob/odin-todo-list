import BurgerMenu from './modules/menu';
import LoadPage from './modules/pageload';
import storageActions from './modules/storage';

const init = () => {
  BurgerMenu();
  LoadPage();
  storageActions();
};

init();
