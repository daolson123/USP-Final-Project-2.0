// JavaScript for filter accordion

const accordionBtn = document.querySelector('.accordion-btn');
const accordionPanel = document.querySelector('.accordion-panel');
const filterList = document.getElementById('filter-list');
const selectedTags = document.getElementById('selected-tags');

// Toggle accordion panel visibility
accordionBtn.addEventListener('click', function() {
  if (accordionPanel.style.display === 'block') {
    accordionPanel.style.display = 'none';
  } else {
    accordionPanel.style.display = 'block';
  }
});

// Handle click on filter item
filterList.addEventListener('click', function(event) {
  if (event.target.classList.contains('filter-item')) {
    const filterValue = event.target.textContent;

    // Create and append tag with delete button
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = filterValue;
    
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      tag.remove(); // Remove the tag when delete button is clicked
    });

    tag.appendChild(deleteButton);
    selectedTags.appendChild(tag);
  }
});
