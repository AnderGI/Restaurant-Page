export function homePageStyler (element){
    element.style.cssText = `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
    justify-content: center;
    align-items: center;
`

}



export function homePageRenderer(element,img){
    let pageTitle = document.createElement('h1')
    pageTitle.textContent = 'Welcome to Hells Chicken'

    element.append(pageTitle)
    
    const claudioRooster = new Image ()
    claudioRooster.src = img
    element.append(claudioRooster)
    
    let pageDesc= document.createElement('p')
    pageDesc.textContent = `You won't forget us. We guarantee.`
    element.append(pageDesc)
}
