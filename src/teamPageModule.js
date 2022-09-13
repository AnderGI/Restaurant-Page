
export class Team{
    constructor(member,icon,description){
        this.member = member
        this.icon = icon
        this.description = description
    }
    render = (element) =>{
        let memberContainer = document.createElement('div')
        memberContainer.setAttribute('class', 'memberContainer')


        let imgAndTxtContainer = document.createElement('div')

            imgAndTxtContainer.style.cssText = `
            display:flex;
            flex-flow: column wrap;
            justify-content: flex-start;
            align-items:center;
            gap: 0.5em;
            `
        
            let teamTitle = document.createElement('h1')
            teamTitle.textContent = this.member
            imgAndTxtContainer.appendChild(teamTitle)

            let memberDescription = document.createElement('p')
            memberDescription.textContent = this.description
            imgAndTxtContainer.appendChild(memberDescription)

        
        memberContainer.appendChild(imgAndTxtContainer)
  
        const memberIcon = new Image()
        memberIcon.src = this.icon

        memberContainer.insertBefore(memberIcon, imgAndTxtContainer)
    
    

        element.appendChild(memberContainer)
    }
}

export function teamPageStyler (element){
    element.style.cssText = `
    display: grid;
    grid-template-columns:repeat(1,1fr);
    gap: 2em 1em;
    padding:2em;
`
}

