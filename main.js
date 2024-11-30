// const name = prompt('Ismingiz nima?');
// const surname = prompt('Familiyangiz nima?');
// const age = prompt('Yoshingiz nechida?');


// document.querySelector('#name').textContent = name;
// document.querySelector('#surname').textContent = surname;
// document.querySelector('#age').textContent = age;

// const choice = prompt("Ismingiz katta yoki kichikligini tanlang:\n1) Katta\n2) Kichik");  
  
// if (choice === "1") {  
      
//     document.querySelector(`#name`).textContent = name.toUpperCase();  
//     document.querySelector(`#surname`).textContent = surname.toUpperCase();  
// } else if (choice === "2") {  
      
//     document.querySelector(`#name`).textContent = name.toLowerCase();  
//     document.querySelector(`#surname`).textContent = surname.toLowerCase();  
// } else {  
      
//     alert("Xato! Faqat 1 yoki 2 ni tanlang.");  }


const name = prompt('Ismingiz nima?');
const surname = prompt('Familiyangiz nima?');
const age = prompt('Yoshingiz nechida?');


if (name && surname && age) {

  const nameElement = document.querySelector('#name');
  const surnameElement = document.querySelector('#surname');
  const ageElement = document.querySelector('#age');

  if (nameElement) nameElement.textContent = name;
  if (surnameElement) surnameElement.textContent = surname;
  if (ageElement) ageElement.textContent = age;


  const choice = prompt("Ismingiz katta yoki kichikligini tanlang:\n1) Katta\n2) Kichik");

  if (choice === "1") {

    if (nameElement) nameElement.textContent = name.toUpperCase();
    if (surnameElement) surnameElement.textContent = surname.toUpperCase();
  } else if (choice === "2") {

    if (nameElement) nameElement.textContent = name.toLowerCase();
    if (surnameElement) surnameElement.textContent = surname.toLowerCase();
  } else {

    alert("Xato! Faqat 1 yoki 2 ni tanlang.");
  }
} else {
  alert("Iltimos, barcha maydonlarni to'ldiring.");
}


// const resultElement = document.querySelector('#result');

// const numericScore = Number(score);

// if (numericScore >= 70) {
//     resultElement.textContent = 'Siz unversitetga kirdingiz';
// } else {
//     resultElement.textContent = 'Siz universitetga kira olmadingiz';}