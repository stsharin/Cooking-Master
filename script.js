fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => displayFoods(data));

const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods');

    
for (let i = 0; i < foods.length; i++) {
    food = foods[i];
    const foodDiv = document.createElement('div');
        foodDiv.className = 'food'; // css class name
        const foodInfo = `
                <h3 class="country-name">${food.strMeal}</h3>
                <p>${food.strCategory}</p>
                
            `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    }

    // foods.forEach(food => {
    //     const foodDiv = document.createElement('div');
    //     foodDiv.className = 'food'; // css class name
    //     const foodInfo = `
    //             <h3 class="country-name">${food.strMeal}</h3>
    //             <p>${food.strCategory}</p>
                
    //         `;
    //     foodDiv.innerHTML = foodInfo;
    //     foodsDiv.appendChild(foodDiv);
    // });
}
