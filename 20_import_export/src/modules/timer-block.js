export class TimerBlock {
   #date
   #timerContainer
   #timerTextHTML

   constructor(date) {
      this.#date = date
      this.#timerContainer = document.createElement('div');
      this.#timerTextHTML = document.createElement('h2');
   }

   render() {
      this.#timerContainer.id = 'timer';
      this.#timerTextHTML.className = 'timer-text';
      this.#timerTextHTML.textContent = 'TIME';

      const todayDateHTML = document.createElement('div');
      todayDateHTML.className = 'today-date';
      todayDateHTML.textContent = new Date();

      this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);

      return this.#timerContainer;
   }
}