/*export function teamRendering(element){
    let teamTitle = document.createElement('h1')
    teamTitle.textContent = 'Team member number 1'

    element.appendChild(teamTitle)

    let memberDescription = document.createElement('p')
    memberDescription.textContent = 'Very beautiful'
    element.appendChild(memberDescription)
}*/

export class Team{
    constructor(member,description){
        this.member = member
        //this.icon = icon
        this.description = description
    }
    render = (element) =>{
        let teamTitle = document.createElement('h1')
        teamTitle.textContent = this.member
    
        element.appendChild(teamTitle)
    
        let memberDescription = document.createElement('p')
        memberDescription.textContent = this.description
        element.appendChild(memberDescription)
    }
}