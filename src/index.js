import { homePageRenderer } from "./homePageModule.js";
import { Team } from "./teamPageModule.js";
import ClaudioRooster from "./claudio.png";
import FamilyGuyRooster from "./familyGuyRooster.png";
import Jerry from "./jerry-smith.png";
import Pig from "./spiderPig.png";
import './style.css';


//RENDER HOME PAGE
import {homePageStyler} from "./homePageModule.js";
import { domCleaner } from "./clearPage.js";

const homePageEl = document.getElementById('home')  //HOME BTN
const container = document.getElementById('mainContent') //MAIN TAG

homePageStyler(container)
homePageRenderer(container,ClaudioRooster)

homePageEl.addEventListener('click', ()=>{
    domCleaner(container)
    homePageStyler(container)
    homePageRenderer(container,ClaudioRooster)
})


//RENDER TEAM PAGE
import { teamPageStyler } from "./teamPageModule.js";
const teamPageEl = document.getElementById('team')
teamPageEl.addEventListener('click', ()=>{
    domCleaner(container)
    teamPageStyler(container)
    
    const memberOne = new Team('Number One', FamilyGuyRooster, 'Very Beautiful')
    memberOne.render(container)

    const memberTwo = new Team('Number Three',ClaudioRooster, 'At your service')
    memberTwo.render(container)

    const memberThree = new Team('Number Two',Jerry, 'Always running')
    memberThree.render(container)

    const speciality = new Team ('Our speciality', Pig, 'Big and gross')
    speciality.render(container)
    
})


//RENDER CONTACT PAGE
import { renderMenuPage } from "./contactPageModule.js";
const menuPageEl = document.getElementById('menu')
menuPageEl.addEventListener('click', ()=>{
    domCleaner(container)
    renderMenuPage(container)
})