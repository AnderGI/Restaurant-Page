
export class Team{
    constructor(member,icon,description){
        this.member = member
        this.icon = icon
        this.description = description
    }
    render = (element) =>{
        let memberContainer = document.createElement('div')
        memberContainer.setAttribute('class', 'memberContainer')

        let teamTitle = document.createElement('h1')
        teamTitle.textContent = this.member
    
        memberContainer.appendChild(teamTitle)

        const memberIcon = new Image()
        memberIcon.src = this.icon

        memberContainer.appendChild(memberIcon)
    
        let memberDescription = document.createElement('p')
        memberDescription.textContent = this.description
        memberContainer.appendChild(memberDescription)

        element.appendChild(memberContainer)
    }
}