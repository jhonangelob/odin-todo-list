const BurgerMenu = () => {
  const burger = document.querySelector('.burger-menu');
  const navbarPanel = document.querySelector('.app__sidebar');
  burger.addEventListener('click', () => {
    if (navbarPanel.style.display === 'none') {
      navbarPanel.style.display = 'block';
    } else {
      navbarPanel.style.display = 'none';
    }
  });
};

export default BurgerMenu;
