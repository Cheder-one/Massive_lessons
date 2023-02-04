import { JSBlock } from './js-block'
import { TimerBlock } from './timer-block'
import { JS_CREATION_DATE } from '../core/constants/settings'

export default class App {
   #JSBlock
   #TimerBlock
   constructor() {
      this.#JSBlock = new JSBlock();
      this.#TimerBlock = new TimerBlock(JS_CREATION_DATE);
   }

   run() {
      const JSBlockHTML = this.#JSBlock.render();
      const timerBlockHTML = this.#TimerBlock.render();

      document.body.append(JSBlockHTML, timerBlockHTML);
   }
}

