// Appends the new item to the bottom of the list
$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const listItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        $('#shopping-list-entry').val("");
    })
})


/* Use event delegation to reach the elements that have been created 
after the page loads */


// Make the delete button remove the item completely from the DOM
$('ul').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    // Button .. div .. li - reach up to remove grandparent of 'this'
    $(this).closest('li').remove();
})


// Make the check button toggle class .shopping-item__checked
$('ul').on('click', '.shopping-item-toggle', function(event) {
    event.preventDefault();
    /* get parent element of .shopping-item-toggle, 
    then prev sibling from parent variable and toggleClass */
    $(this).closest('div').prev().toggleClass("shopping-item__checked");
})