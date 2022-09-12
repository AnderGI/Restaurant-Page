import { pageLoad } from "./homePageModule.js";
import { Team } from "./teamPageModule.js";
import ClaudioRooster from "./claudio.png";
import FamilyGuyRooster from "./familyGuyRooster.png";
import Jerry from "./jerry-smith.png";
import Pig from "./spiderPig.png";
import './style.css';

//render a title, img and a p for the home page
const homePageEl = document.getElementById('home')

const container = document.getElementById('content')
container.style.cssText = `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    align-items: center;
`

pageLoad(container,ClaudioRooster)

homePageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
    container.style.cssText = `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    align-items: center;
`
    pageLoad(container,ClaudioRooster)
})

//chage it for the Team Page. Just change the content
const teamPageEl = document.getElementById('team')
teamPageEl.addEventListener('click', ()=>{
    container.innerHTML = ""
    container.style.cssText = `
        display: grid;
        grid-template-columns:repeat(2,1fr);
        gap: 2em 1em;
        padding:2em;
`

    const memberOne = new Team('Number One', FamilyGuyRooster, 'Very Beautiful')
    memberOne.render(container)

    const memberTwo = new Team('Number Three',ClaudioRooster, 'At your service')
    memberTwo.render(container)

    const memberThree = new Team('Number Two',Jerry, 'Always running')
    memberThree.render(container)

    const speciality = new Team ('Our speciality', Pig, 'Big and gross')
    speciality.render(container)
    
})


//change the content of the container in the Contact 
//Page
const contactPageEl = document.getElementById('contact')

