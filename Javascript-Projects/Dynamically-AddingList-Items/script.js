const addItemsButton = document.getElementById("addItemsButton");
const orderedList = document.getElementById("orderedList");

let currentListIndex = 0;

// pre-existing array of list items
const listItems = ["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"
];

addItemsButton.addEventListener('click', ()=>{

    if (currentListIndex < listItems.length) {
        const newList = document.createElement('li');
        newList.textContent = listItems[currentListIndex];
        orderedList.appendChild(newList);
        currentListIndex++;
    }else{
        alert("All items have been added.")
    }
});