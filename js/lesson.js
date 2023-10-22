// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-d{2}/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})
// TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
const hideTabContent = () => {
    tabContent.forEach((tabBlock) => {
        tabBlock.style.display = 'none';
    });
    tabs.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (indexElement = 0) => {
    tabContent[indexElement].style.display = 'block';
    tabs[indexElement].classList.add('tab_content_item_active');
};

let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % tabs.length;
    hideTabContent();
    showTabContent(currentIndex);
};

hideTabContent();
showTabContent(0);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                currentIndex = tabIndex;
                hideTabContent();
                showTabContent(currentIndex);
            }
        });
    }
};
setInterval(nextSlide, 3000);

//converter
// const somInput = document.querySelector('#som')
// const usdInput = document.querySelector('#usd')
// const eurInput = document.querySelector('#eur')
// somInput.addEventListener('input', ()=>{
//     const request = new XMLHttpRequest()
//     request.open("GET","../data/converter.json")
//     request.setRequestHeader("Content-type","application/json")
//     request.send()
//     request.onload = () => {
//         const response = JSON.parse(request.response)
//         usdInput.value = (somInput.value / response.usd).toFixed(2)
//         eurInput.value = (somInput.value/ response.eur).toFixed(2)
//     }
// })
// DRY - don't repeat yourself
// KISS - Keep it simple, stupidconst somInput = document.querySelector('#som');
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const exchangeRates = {
    usd: 89.32,
    eur: 94.72
};

function convertCurrency(input, fromCurrency, toCurrency1, toCurrency2) {
    if (input.value === '') {
        toCurrency1.value = '';
        toCurrency2.value = '';
    } else {
        const inputValue = parseFloat(input.value);
        toCurrency1.value = (inputValue / exchangeRates[fromCurrency]).toFixed(2);
        toCurrency2.value = (inputValue / exchangeRates[fromCurrency]).toFixed(2);
    }
}

somInput.addEventListener('input', () => {
    convertCurrency(somInput, 'usd', usdInput, eurInput);
});

usdInput.addEventListener('input', () => {
    convertCurrency(usdInput, 'eur', somInput, eurInput);
});

eurInput.addEventListener('input', () => {
    convertCurrency(eurInput, 'usd', somInput, usdInput);
});
