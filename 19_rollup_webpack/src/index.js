import "../index.css";
import JSImage from "../assets/keks.png";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "It's a cat Keks";
const JSImageHTML = document.createElement("img");
JSImageHTML.src = JSImage;

document.body.append(mainTitle, JSImageHTML);

console.log("Hello World!!!");
