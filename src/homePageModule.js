
export function pageLoad(element){
    let pageTitle = document.createElement('h1')
    pageTitle.textContent = 'Restaurant Title'

    element.append(pageTitle)

    let pageImg = document.createElement('img')
    pageImg.setAttribute('src', 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600')
    element.append(pageImg)
    
    let pageDesc= document.createElement('p')
    pageDesc.textContent = 'This is a cool restaurant'
    element.append(pageDesc)
}
