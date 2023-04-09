

const createPopup = (type) => {

  // a promise function to make a fetch request to the API
//  const fetchApi = async (type) => {
//   console.log(type);
//   const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);
//   console.log(response.json());
//   return response.json();
// };

//   const meal = fetchApi(type);


const xhr = new XMLHttpRequest();
xhr.open('GET', `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${type}`);
xhr.send();

// Parse the API response and display the list of meals with images and information
xhr.onload = () => {
  if (xhr.status === 200) {
    const meal = JSON.parse(xhr.response).meals[0];
    console.log(meal);
  

    const modalWrapper = document.querySelector('.modal-wrapper');
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
     



   //
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
     modalBodyImage.classList.add('img-fluid', 'mb-4', 'modalImage');
     modalBodyImage.setAttribute('src', `${meal.strMealThumb}`);
     modalBodyImage.setAttribute('alt', '');
     modalBody.appendChild(modalBodyImage);

     const detail = document.createElement('div');
     const category = document.createElement('p');
     category.innerText = `Category : ${meal.strCategory}`;
     detail.appendChild(category);

     const area = document.createElement('p');
     area.innerText = `Area : ${meal.strArea}`;
     detail.appendChild(area);

     modalBody.appendChild(detail);
     
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

     modalWrapper.appendChild(modal);
    }}


     

}


export default createPopup;