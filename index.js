'use strict';

function main() {
     $(`#js-shopping-list-form`).on('submit', e =>
     e.preventDefault();
     const newFood = $(`shopping-list-entry`).val();
     $(`.shopping-list`).append(
         `<li>
            <span class="shopping-item">${newFood}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
     );
     })

     $(`.shopping-list`).on(`click`, `shopping-item-toggle`, function(e) {
         e.preventDefault();
         $(this).elements('id').find(`shopping.item`).toggleClass{`shopping-item_checked`};
    });

    $(`shopping-list`).on(`click`, `shopping-item-delete`, function(e) {
        e.preventDefault();
        $(this).elemnts('id').remove();
    });

    main();
     

