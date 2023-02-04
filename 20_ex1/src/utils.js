export function getRandomColor() {
   let hexString = "#";
   const possible = "0123456789ABCDEF";
   for (let i = 0; i < 6; i++) {
      hexString += possible[Math.floor(Math.random() * possible.length)]
   }
   return hexString;
}