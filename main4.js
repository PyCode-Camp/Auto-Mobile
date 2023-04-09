import createPopup from "./modules/popUp-creator.js";

// create container-fluid
const containerFluid = document.createElement('div');
containerFluid.classList.add('container-fluid', 'py-5');

// create container
const container = document.createElement('div');
container.classList.add('container', 'pt-5', 'pb-3');

// create row
const row = document.createElement('div');
row.classList.add('row');


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
   
    // create row
const row = document.createElement('div');
row.classList.add('row');

    meals.forEach(meal => {

       



    // create column 1
const col1 = document.createElement('div');
col1.classList.add('col-lg-4', 'col-md-6', 'mb-2', 'column');

// create rent-item
const rentItem = document.createElement('div');
rentItem.classList.add('rent-item', 'mb-4');

// create image
const mealImage = document.createElement('img');
mealImage.classList.add('img-fluid', 'mb-4');
mealImage.src = meal.strMealThumb;
mealImage.alt = meal.strMeal;

rentItem.appendChild(mealImage);

// create title
const title = document.createElement('h4');
title.classList.add('text-uppercase', 'mb-4');
title.textContent = meal.strMeal;

rentItem.appendChild(title);

// create stats
const stats = document.createElement('div');
stats.classList.add('d-flex', 'justify-content-center', 'mb-4');

// create stats items
const statsItems = [
  {
    iconClass: 'fa fa-car text-primary mr-1',
    text: '2015',
  },
  {
    iconClass: 'fa fa-cogs text-primary mr-1',
    text: 'AUTO',
  },
  {
    iconClass: 'fa fa-road text-primary mr-1',
    text: '25K',
  },
];

statsItems.forEach((item) => {
  const itemWrapper = document.createElement('div');
  itemWrapper.classList.add('px-2');
  const itemIcon = document.createElement('i');
    itemIcon.setAttribute('class', item.iconClass);
  const itemText = document.createElement('span');
  itemText.textContent = item.text;

  itemWrapper.appendChild(itemIcon);
  itemWrapper.appendChild(itemText);
  stats.appendChild(itemWrapper);
});

rentItem.appendChild(stats);

// create view button
const viewButton = document.createElement('button');
viewButton.type = 'button';
viewButton.classList.add('btn', 'btn-primary','view-button');
viewButton.dataset.toggle = 'modal';
viewButton.dataset.target = '#exampleModalLong';
viewButton.dataset.mealId=meal.idMeal; 
viewButton.textContent = 'view';

rentItem.appendChild(viewButton);

// create like button
const likeButton = document.createElement('button');
likeButton.type = 'button';
likeButton.classList.add('btn', 'btn-primary', 'mx-2');
likeButton.dataset.target = '#exampleModalLong';
const likeWrapper = document.createElement('a');
likeWrapper.classList.add('like');
likeWrapper.href = '#';
const likeIcon = document.createElement('i');
likeIcon.classList.add('far', 'fa-thumbs-up', 'mx-2', 'fa-xxs', 'text-white');
likeIcon.style.marginTop = '-0.16rem';
likeIcon.id = meal.idMeal;
const likeInput = document.createElement('input');
likeInput.classList.add('qty1');
likeInput.name = 'qty1';
likeInput.readOnly = true;
likeInput.type = 'text';
likeInput.value = 0;
likeInput.style.border = 'none';
likeInput.style.width = '20px';
likeInput.style.background = 'transparent';
likeWrapper.appendChild(likeIcon);

likeButton.appendChild(likeWrapper);

rentItem.appendChild(likeButton);

const likeCount = document.createElement('p');
likeCount.classList.add('like-count');
likeCount.innerText = '0 likes';

rentItem.appendChild(likeCount);





  
    





// Append modal to the document body
// document.body.appendChild(modalDialog);
// rentItem.appendChild(modal);
col1.appendChild(rentItem);
row.appendChild(col1);





    });

    document.body.appendChild(containerFluid);
    containerFluid.appendChild(container);
    containerFluid.appendChild(row);
    // document.body.appendChild(mealList);

    // * create infoPopup
    const viewButtons = document.querySelector('.view-button');

    viewButtons.forEach(viewButton => {viewButton.addEventListener('click', () => {

      const id = viewButton.dataset.mealId;
  
      createPopup(id);
    })});

    // viewButton.addEventListener('click', () => {

    //   const id = viewButton.dataset.mealId;
  
    //   createPopup(id);
    // })
  
    

  } else {
    console.error('Failed to fetch meals');
  }
};


     document.addEventListener('DOMContentLoaded',()=>{

        // Step 1: Add click event listener to "View" button
     const viewButton = document.querySelector('.view-button');
   
     viewButton.addEventListener('click', (event) => {
       // Step 2: Get meal ID from data attribute or event argument
       const mealId = event.target.dataset.mealId;
       console.log(mealId);
       
   
       // Step 3: Make AJAX request to server
       fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}}`)
         .then(response => response.json())
         .then(data => {
           // Step 6: Populate modal with meal data
          console.log(data);
   
           
      
   
           const modalTitle = document.querySelector('.modal-title');
           // const modalDescription = document.querySelector('.modal-description');
           // const modalImage = document.querySelector('.modal-image');
      
           
   
           modalTitle.textContent = data.strMeal;
           // modalDescription.textContent = data.description;
           // modalImage.src = data.image;
   
           
         });
     });
     });
 






