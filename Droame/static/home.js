//Convert time from AM and PM to HH:MM format and set that values in the html page

window.onload = () => {
        let eles = document.querySelectorAll('.time');
        for(let i = 0; i < eles.length; i++){
            eles[i].innerHTML = convertTime(eles[i].innerHTML);
        }
    }

// Function to Covert time to HH:MM format

function convertTime(time) {
    let [hours, minutes, period] = time.split(/[:\s]/);
    hours = parseInt(hours);
    if (period === "PM" && hours !== 12) {
         hours += 12;
    }
    if (period === "AM" && hours === 12) {
       hours = 0;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

// to handle the edit button click event

let eles = document.querySelectorAll('.edit');

for(let i = 0; i < eles.length; i++){
    eles[i].addEventListener('click', () => {
        setValues(i);
        document.querySelector('.form').style.visibility = 'visible';
        let all = document.querySelector('.main').children;
        for(let i = 0; i < all.length; i++){
            all[i].style.opacity = '0.3';
        }
        document.querySelector('.form').style.opacity = '1';
        document.querySelector('.form form').action = 'edit';
    })
}


// set values in the form that is used to display the values and provide edit option to the operator
function setValues(i){
    let customer_details = document.querySelectorAll('.row')[i].children;
    let form_details = document.querySelector('.form > form').children;

    console.log(form_details);
    for(let index = 1; index < form_details.length - 1; index++){
        form_details[index].children[1].value = customer_details[index-1].innerHTML;
    }

}

// when cancel button is clicked

document.querySelector('.cancel').addEventListener('click', () => {
    let all = document.querySelector('.main').children;
            for(let i = 0; i < all.length; i++){
                all[i].style.opacity = '1';
            }
    document.querySelector('.form').style.visibility = 'hidden';
})

// when delete record button is clicked

let delete_eles = document.querySelectorAll('.delete');

for(let i = 0; i < delete_eles.length; i++){
    delete_eles[i].addEventListener('click', () => {
        setValues(i);
        document.querySelector('.form form').action = 'delete';
        document.querySelector('.form form').submit();
    })
}

// when operator clicks the new button to create new record

document.querySelector('.create').addEventListener('click', () => {
    document.querySelector('.form').style.visibility = 'visible';



    let all = document.querySelector('.main').children;
        for(let i = 0; i < all.length; i++){
            all[i].style.opacity = '0.3';
        }
    document.querySelector('.form').style.opacity = '1';

    let form_details = document.querySelector('.form > form').children;


    for(let index = 1; index < form_details.length - 1; index++){
        form_details[index].children[1].value = "";
    }

    document.querySelector('.form > form').action = 'create';
})
