import { getRandomColor } from './utils';


export function initApp() {
   const btnRandColor = document.createElement('button');
   btnRandColor.className = 'button';
   btnRandColor.textContent = 'Изменить цвет страницы';
   document.body.append(btnRandColor);

   btnRandColor.addEventListener('click', (event) => {
      const { target } = event;
      document.body.style.backgroundColor = getRandomColor();
   });
}



