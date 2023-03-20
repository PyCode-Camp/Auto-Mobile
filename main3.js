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
    //   const col = document.createElement('div');
    //   col.setAttribute('class', 'col-lg-4 col-md-6 mb-2 column');

    //   const mealInfo = document.createElement('div');
    //   mealInfo.setAttribute('class', 'rent-item mb-4');

    //   const mealImage = document.createElement('img');
    //   mealImage.setAttribute('class', 'img-fluid mb-4');
    //   mealImage.setAttribute('style', 'height: 300px');
    //   mealImage.src = meal.strMealThumb;
    //   mealImage.alt = meal.strMeal;
    //   mealInfo.appendChild(mealImage);

    //   const mealName = document.createElement('h3');
    //   mealName.innerHTML = meal.strMeal;
    //   mealInfo.appendChild(mealName);

    //   const category = document.createElement('p');
    //   category.innerHTML = `<strong>Category:</strong> ${meal.strCategory}`;
    //   mealInfo.appendChild(category);

    //   const area = document.createElement('p');
    //   area.innerHTML = `<strong>Area of Origin:</strong> ${meal.strArea}`;
    //   mealInfo.appendChild(area);

    //   const instructions = document.createElement('p');
    //   instructions.innerHTML = `<strong>Instructions:</strong> ${meal.strInstructions}`;
    //   mealInfo.appendChild(instructions);

    //   col.appendChild(mealInfo);
    //   row.appendChild(col);


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
viewButton.classList.add('btn', 'btn-primary');
viewButton.dataset.toggle = 'modal';
viewButton.dataset.target = '#exampleModalLong';
viewButton.textContent = 'view';

rentItem.appendChild(viewButton);

// create like button
const likeButton = document.createElement('button');
likeButton.type = 'button';
likeButton.classList.add('btn', 'btn-primary', 'mx-2');
likeButton.dataset.target = '#exampleModalLong';
const likeWrapper = document.createElement('a');
likeWrapper.classList.add('like');
const likeIcon = document.createElement('i');
likeIcon.classList.add('far', 'fa-thumbs-up', 'mx-2', 'fa-xxs', 'text-white');
likeIcon.style.marginTop = '-0.16rem';
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
likeWrapper.appendChild(likeInput);
likeButton.appendChild(likeWrapper);

rentItem.appendChild(likeButton);

// create modal
const modal = document.createElement('div');
modal.classList.add('modal', 'fade');
modal.id = 'exampleModalLong';
modal.tabIndex = '-1';
modal.role = 'dialog';
modal.setAttribute('aria-labelledby', 'exampleModalLongTitle');
modal.setAttribute('aria-hidden', 'true');

// create modal dialog
const modalDialog = document.createElement('div');
modalDialog.classList.add('modal-dialog');
modal.appendChild(modalDialog);

// Add modal content
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modalDialog.appendChild(modalContent);

// Add modal header
const modalHeader = document.createElement('div');
modalHeader.classList.add('modal-header');
modalContent.appendChild(modalHeader);

const modalTitle = document.createElement('h5');
modalTitle.classList.add('modal-title');
modalTitle.textContent = meal.strMeal;
modalHeader.appendChild(modalTitle);

const modalCloseButton = document.createElement('button');
modalCloseButton.classList.add('close');
modalCloseButton.setAttribute('type', 'button');
modalCloseButton.setAttribute('data-dismiss', 'modal');
modalCloseButton.setAttribute('aria-label', 'Close');
modalHeader.appendChild(modalCloseButton);

const closeButtonIcon = document.createElement('span');
closeButtonIcon.setAttribute('aria-hidden', 'true');
closeButtonIcon.innerHTML = '×';
modalCloseButton.appendChild(closeButtonIcon);

// Add modal body
const modalBody = document.createElement('div');
modalBody.classList.add('modal-body');
modalContent.appendChild(modalBody);

const modalBodyImage = document.createElement('img');
modalBodyImage.classList.add('img-fluid', 'mb-4');
modalBodyImage.setAttribute('src', `${meal.strMealThumb}`);
modalBodyImage.setAttribute('alt', '');
modalBody.appendChild(modalBodyImage);

// Add comment section
const commentSection = document.createElement('section');
modalContent.appendChild(commentSection);

const commentCard = document.createElement('div');
commentCard.classList.add('card');
commentSection.appendChild(commentCard);

const commentCardBody = document.createElement('div');
commentCardBody.classList.add('card-body', 'p-4');
commentCard.appendChild(commentCardBody);

const commentContainer = document.createElement('div');
commentContainer.classList.add('d-flex', 'flex-start', 'w-100');
commentCardBody.appendChild(commentContainer);

const commentInputContainer = document.createElement('div');
commentInputContainer.classList.add('w-100');
commentContainer.appendChild(commentInputContainer);

const commentTitle = document.createElement('h5');
commentTitle.textContent = 'Add a comment';
commentInputContainer.appendChild(commentTitle);

const commentForm = document.createElement('div');
commentForm.classList.add('form-outline');
commentInputContainer.appendChild(commentForm);

const commentTextArea = document.createElement('textarea');
commentTextArea.classList.add('form-control');
commentTextArea.setAttribute('id', 'textAreaExample');
commentTextArea.setAttribute('rows', '4');
commentTextArea.setAttribute('placeholder', 'What is your view?');
commentForm.appendChild(commentTextArea);

const commentSubmitContainer = document.createElement('div');
commentSubmitContainer.classList.add('d-flex', 'justify-content-between', 'mt-3');
commentInputContainer.appendChild(commentSubmitContainer);

const commentSubmitButton = document.createElement('button');
commentSubmitButton.classList.add('btn', 'btn-danger');
commentSubmitButton.setAttribute('type', 'button');
commentSubmitButton.textContent = 'Send';
commentSubmitContainer.appendChild(commentSubmitButton);

const commentSubmitIcon = document.createElement('i');
commentSubmitIcon.classList.add('fas', 'fa-long-arrow-alt-right', 'ms-1');
commentSubmitButton.appendChild(commentSubmitIcon);

// Add modal footer
const modalFooter = document.createElement('div');
modalFooter.classList.add('modal-footer');
modalContent.appendChild(modalFooter);

const closeButton = document.createElement('button');
closeButton.classList.add('btn', 'btn-secondary');
closeButton.setAttribute('type', 'button');
closeButton.setAttribute('data-dismiss', 'modal');
closeButton.textContent = 'Close';
modalFooter.appendChild(closeButton);

// Append modal to the document body
// document.body.appendChild(modalDialog);
rentItem.appendChild(modal);
col1.appendChild(rentItem);
row.appendChild(col1);

    });

    document.body.appendChild(containerFluid);
    containerFluid.appendChild(container);
    containerFluid.appendChild(row);
    // document.body.appendChild(mealList);
    
  } else {
    console.error('Failed to fetch meals');
  }
};






