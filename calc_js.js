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
