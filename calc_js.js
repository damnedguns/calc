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


