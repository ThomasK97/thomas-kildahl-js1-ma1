const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//exersise 1


const animal = {
    type: "cat",
    name: "Egil",
    age: 6,
    complain: function(){
        console.log("Meow");
    }
    
};

animal.complain();

//exersise 2

const heading = document.querySelector("h3");

heading.innerHTML = ("Updated Heading")

// exersise 3

heading.style.fontSize = "2em";


// exersise 4

heading.classList.add("Subheading");


// exersise 5

var paragraphs = document.querySelectorAll("p");
var i;

for(i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

// exersise 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragrph</p>";
resultsContainer.style.backgroundColor = "yellow";



//exersise 7

function listParameter(list1, list2, list3){
    
}

console.log(listParameter)

//ecersise 8






















    