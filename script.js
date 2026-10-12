// Welcome message

function showMessage() {
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
}


// Food filter

function filterFood(category) {

    let foods = document.querySelectorAll(".food-card");

    foods.forEach(function(food) {

        if (category === "all") {
            food.style.display = "block";
        }

        else if (food.classList.contains(category)) {
            food.style.display = "block";
        }

        else {
            food.style.display = "none";
        }

    });
}


// Dark mode

function changeTheme() {

    document.body.classList.toggle("dark");

}


// Order button

function orderFood() {

    alert("Thank you! Your order request has been received. 🍽");

}