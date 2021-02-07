// search button event handler
const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    getUserData(userInput);
});

// Getting User Input
function getUserData(userInput) {
    const meal = document.getElementById('meal');
    let url = "";
    if (userInput.length === 1) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${userInput}`;
        meal.innerHTML = null;
        meal.innerHTML = null;

    } else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
        meal.innerHTML = null;
        meal.innerHTML = null;
    }
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data)
        })
}

// displaying search result
const displayData = data => {

    data.meals.forEach(item => {

        const div = document.createElement('div');

        const allMealInfo = `
        <button onclick="showMealDetails('${item.strMeal}')">
        <div class="col">
            <div class="card h-100">
                <img class="card-img-top thumbnail" src="${item.strMealThumb}"/>
                <div class="card-body">
                    <h5 class="card-title mx-auto">${item.strMeal}</h5>
                    
                </div>
            </div>
        </div> 
        </button>`;
        div.innerHTML = allMealInfo;
        meal.appendChild(div);

    });
}

// each meal details
const showMealDetails = (string) => {
    const result = document.getElementById('mealDetails');
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${string}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {

            result.style.display = "block"
            const div = document.createElement('div');
            let mealInfo;

            data.meals.forEach(eachItem => {
                if (string === eachItem.strMeal) {
                    mealInfo = `
                    <img src="${eachItem.strMealThumb}" class="card-img-top">
                    <div class="card-body">
                    <h3 class="card-title">${eachItem.strMeal}</h3>
                    <p>Ingredients</p>
                    <ul>                    
                        <li>${eachItem.strIngredient1}</li>
                        <li>${eachItem.strIngredient2}</li>
                        <li>${eachItem.strIngredient3}</li>
                        <li>${eachItem.strIngredient4}</li>
                        <li>${eachItem.strIngredient5}</li>
                        <li>${eachItem.strIngredient6}</li>
                        <li>${eachItem.strIngredient7}</li>
                        <li>${eachItem.strIngredient8}</li>
                        <li>${eachItem.strIngredient9}</li>
                        <li>${eachItem.strIngredient10}</li>
                    </ul>
                    </div> `;
                }
            })

            div.innerHTML = mealInfo;
            result.appendChild(div);
        });
    result.innerHTML = null;
}
