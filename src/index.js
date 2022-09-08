import { pageLoad } from "./homePageModule.js";
import { teamRendering } from "./teamPageModule.js";
import './style.css';

//render a title, img and a p for the home page
const homePageEl = document.getElementById('home')
const container = document.getElementById('content')
pageLoad(container)

homePageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
    pageLoad(container)
})

//chage it for the Team Page. Just change the content
const teamPageEl = document.getElementById('team')
teamPageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
   teamRendering(container) 
})


//change the content of the container in the Contact 
//Page
const contactPageEl = document.getElementById('contact')

