export function teamRendering(element){
    let teamTitle = document.createElement('h1')
    teamTitle.textContent = 'Team member number 1'

    element.appendChild(teamTitle)

    let memberDescription = document.createElement('p')
    memberDescription.textContent = 'Very beautiful'
    element.appendChild(memberDescription)
}