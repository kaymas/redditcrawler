const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')

searchForm.addEventListener('submit', e => {
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value
    const searchLimit = document.getElementById('limit').value
    
    //validate
    if(searchTerm === ''){
        showMessage('Please enter a search term', 'alert-danger')
    }
    //clear input
    searchInput.value = ''


    //sarch reddit
    


    e.preventDefault()
})

showMessage = function(message, className){
    const div = document.createElement('div')
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))

    //get parent and sibiling
    const searchContainer = document.getElementById('search-container')
    const search = document.getElementById('search')

    searchContainer.insertBefore(div, search)

    setTimeout(() => document.querySelector('.alert').remove(), 3000)
}