<<<<<<< HEAD
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.caldisplay');
let result = '';
let operator = '';


function ClickBoutons(num) {
    if (operator == '') {
        result += num;
        display.textContent = result;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let selection = button.textContent;
        ClickBoutons(selection);
    })
})


=======
 const buttons = document.querySelectorAll('button');
              const display = document.querySelector('.caldisplay');
              let result = '';
              let operator = '';

              buttons.forEach((button) => {
                     button.addEventListener('click', function () {
                            let selection = button.textContent;
                            numberSelected(selection);


                     })
              })


              // update result/num2 values and display when number is selected
              function numberSelected(num) {
                     if (operator == '') {
                            result += num;
                            display.textContent = result;
                     } 
              }
>>>>>>> d1d79e8081c922f3bdceaacd2a275dc35feb29cd
