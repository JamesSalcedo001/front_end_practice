const suggestions = [
    "Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew"
];

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');


// function to filter suggestions based on input

function filterSuggestions(inputText) {
    suggestionsList.innerHTML = ""; // clearing existing suggestions

    if (!inputText) return 

    const filtered = suggestions.filter(item => item.toLowerCase().startsWith(inputText.toLowerCase()))

    filtered.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.onclick = function() { // set the search input to the clicked suggestion
            searchInput.value = item;
            suggestionsList.innerHTML = ""; // clear suggestions after selection
        }
        suggestionsList.appendChild(li);
    })
}

searchInput.addEventListener('input', () => filterSuggestions(searchInput.value));