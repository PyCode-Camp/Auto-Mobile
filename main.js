// Replace YOUR_API_KEY with your actual API key
const apiKey = '1';

// Replace CATEGORY_NAME with the category of meals you want to fetch
const category = 'Seafood';

// Make an AJAX request to the Meals DB API
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=${category}`);
xhr.send();

// Parse the API response and display the list of meals with images and information
xhr.onload = () => {
  if (xhr.status === 200) {
    const meals = JSON.parse(xhr.response).meals;
    const mealList = document.createElement('ul');
    const row = document.querySelector('.row');

    meals.forEach(meal => {
      const col = document.createElement('div');
      col.setAttribute('class', 'col-lg-4 col-md-6 mb-2 column');

      const mealInfo = document.createElement('div');
      mealInfo.setAttribute('class', 'rent-item mb-4');

      const mealImage = document.createElement('img');
      mealImage.setAttribute('class', 'img-fluid mb-4');
      mealImage.setAttribute('style', 'height: 300px');
      mealImage.src = meal.strMealThumb;
      mealImage.alt = meal.strMeal;
      mealInfo.appendChild(mealImage);

      const mealName = document.createElement('h3');
      mealName.innerHTML = meal.strMeal;
      mealInfo.appendChild(mealName);

      const category = document.createElement('p');
      category.innerHTML = `<strong>Category:</strong> ${meal.strCategory}`;
      mealInfo.appendChild(category);

      const area = document.createElement('p');
      area.innerHTML = `<strong>Area of Origin:</strong> ${meal.strArea}`;
      mealInfo.appendChild(area);

      const instructions = document.createElement('p');
      instructions.innerHTML = `<strong>Instructions:</strong> ${meal.strInstructions}`;
      mealInfo.appendChild(instructions);

      col.appendChild(mealInfo);
      row.appendChild(col);
    });

    document.body.appendChild(mealList);
    
  } else {
    console.error('Failed to fetch meals');
  }
};
