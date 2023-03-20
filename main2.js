// Replace YOUR_API_KEY with your actual API key
const apiKey = '1';

// Replace CATEGORY_NAME with the category of meals you want to fetch
const category = 'Seafood';

// Make an AJAX request to the Meals DB API
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=${category}`);
xhr.send();

// Parse the API response and display the list of meals with images
xhr.onload = () => {
  if (xhr.status === 200) {
    const meals = JSON.parse(xhr.response).meals;
    const mealList = document.createElement('ul');
    const row = document.querySelector('.row');
    

    meals.forEach(meal => {
      // const imageItem = document.get('img');
      const col = document.createElement('div');
      col.setAttribute('src','col-lg-4 col-md-6 mb-2 column');

      const rentItem = document.createElement('div');
      rentItem.setAttribute('class', 'rent-item mb-4')

      const Image = document.createElement('img');
      Image.setAttribute('class', 'img-fluid mb-4')
      Image.setAttribute('style', 'height: 300px')
      Image.src = meal.strMealThumb;
      Image.alt = meal.strMeal;
      rentItem.appendChild(Image);

      col.appendChild(rentItem);
      row.appendChild(col);

      // const mealItem = document.createElement('li');
      // const mealImage = document.createElement('img');
      // mealImage.src = meal.strMealThumb;
      // mealImage.alt = meal.strMeal;
      // mealImage.width = 150;
      // mealItem.appendChild(mealImage);
      // mealItem.innerHTML += meal.strMeal;
      // mealList.appendChild(mealItem);
    });
    document.body.appendChild(mealList);
    
  } else {
    console.error('Failed to fetch meals');
  }
};
