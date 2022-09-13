

// fetch data

const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    meals.forEach(meal =>{
        // console.log(meal);
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('col');
        mealsDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealsDiv);
    })

}

const searchFood = () =>{
    const searcfField = document.getElementById('search-field');

    const searchText = searcfField.value;

    loadMeals(searchText);
    searcfField.value = "";
}

const loadMealDetail = (idMeal) =>{

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]));

}

const displayMealDetails = (meal) =>{

    const detailsContainer = document.getElementById('detail-container');
    detailsContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>  
    
    `;
    detailsContainer.appendChild(mealDiv);

}

loadMeals('fish');