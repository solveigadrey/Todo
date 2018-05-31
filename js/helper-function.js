var Helper={}


Helper.deleteElement = function deleteElement(e){
    e.target.parentElement.parentElement.remove()
    
}

window.Helper = Helper;