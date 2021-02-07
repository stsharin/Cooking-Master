const result = document.getElementById('mealDetails');

// search button event handler
const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    getUserData(userInput);
});

// Getting User Input
function getUserData(userInput) {
    result.style.display = "none";
    const meal = document.getElementById('meal');
    let url = "";
    if (userInput.length === 1) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${userInput}`;
        meal.innerHTML = null;
        meal.innerHTML = null;
    }  
    else {
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
    
    let text = "";
    if(data.meals){
        data.meals.forEach(item => {
            const div = document.createElement('div');
            const allMealInfo = text + `
            <button onclick="showMealDetails('${item.strMeal}')" class="cardBtn">
                <div>
                    <div>
                        <img class="thumbnail" src="${item.strMealThumb}"/>
                        <div class="bg-white">
                            <h5 class="bg-white">${item.strMeal}</h5>   
                        </div>
                    </div>
                </div> 
            </button>`;
            div.innerHTML = allMealInfo;
            meal.appendChild(div);
        });
    }
    else{
        result.style.display = "none"
        const div = document.createElement('div');
        text = `
        <div>
            <h1 class="error-text">Opps! the food is not available. Try another one :)</h1>
        </div>`;
        div.innerHTML = text;
        meal.appendChild(div);
    }
    
}

// each meal details
const showMealDetails = (string) => {
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
                    <div class="bg-white item-details">
                        <img src="${eachItem.strMealThumb}" class="card-img-top">
                        <div class="bg-white">
                            <h3 class="bg-white">${eachItem.strMeal}</h3>
                            <p class="bg-white">Ingredients</p>
                            <div>
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
                            </div>
                        </div>
                    </div> `;
                }
            })

            div.innerHTML = mealInfo;
            result.appendChild(div);
        });
    result.innerHTML = null;
}
