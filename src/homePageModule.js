
export function pageLoad(element,img){
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
