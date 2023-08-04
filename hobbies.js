let buttonRef = document.getElementById("choose");
let dropdown = document.getElementById("select");
let image = document.getElementById("showImage");
let description = document.getElementById("show_desc");



//IMAGE CHANGES AFTER BUTTON IS PRESSED
buttonRef.onclick = function(event){

   event.preventDefault();
   let choice = dropdown.value;



    if( choice == "Reading"){
        image.src = "Images/books.webp";
        description.innerHTML = "Nice, you read books.";
    }
    else if(choice == "Gamer"){
        image.src = "Images/Games.jpg";
        description.innerHTML = "A true gamer never reveals his trap card.";
    }
    else if(choice == "Family Person"){
        image.src = "Images/FamilyHobby.webp";
        description.innerHTML = "Spending time with family is always something good to have.";
    }
    else if(choice == "Everything doer"){
        image.src = "Images/Emoji_Hands.webp";
        description.innerHTML = "YOU DO IT ALL!";
    }

}