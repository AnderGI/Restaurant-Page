import { pageLoad } from "./homePageModule.js";
import { Team } from "./teamPageModule.js";
import ClaudioRooster from "./claudio.png";
import './style.css';

//render a title, img and a p for the home page
const homePageEl = document.getElementById('home')
const container = document.getElementById('content')
pageLoad(container,ClaudioRooster)

homePageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
    pageLoad(container,ClaudioRooster)
})

//chage it for the Team Page. Just change the content
const teamPageEl = document.getElementById('team')
teamPageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
    const memberOne = new Team('NUmber One', 'Very Beautiful')
    memberOne.render(container)
})


//change the content of the container in the Contact 
//Page
const contactPageEl = document.getElementById('contact')

