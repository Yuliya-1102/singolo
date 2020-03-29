
const navigation = (event) => {
	// console.log(event.target);

	// if(event.target.tagName === 'A') {
	// 	event.preventDefault();
	// }
	
	document.querySelectorAll('li').forEach(li => li.classList.remove('navigation-nav'));
	event.target.closest('li').classList.add('navigation-nav');
}


document.querySelector('nav').addEventListener('click', navigation);


// display changes background
const displayBlackVertikal = (event) => {
	let displayVertikal = document.querySelector('.devices__display');
	if (displayVertikal.style.display == 'block') {
		displayVertikal.style.display = 'none';
	}
	else {
		displayVertikal.style.display = 'block';
	}
}
document.querySelector('.devices__phone_vertical').addEventListener('click', displayBlackVertikal);
document.querySelector('.devices__display').addEventListener('click', displayBlackVertikal);



const displayBlackGorisontal = (event) => {
	let displayGorisontal = document.querySelector('.devices__display_horisontal');
	if (displayGorisontal.style.display == 'block') {
		displayGorisontal.style.display = 'none';
	}
	else {
		displayGorisontal.style.display = 'block';
	}
}
document.querySelector('.devices__phone_horizontal').addEventListener('click', displayBlackGorisontal);
document.querySelector('.devices__display_horisontal').addEventListener('click', displayBlackGorisontal);




const buttonNext = (event) => {
	let slideOne = document.querySelector('#slide_1');
	let slideTwo = document.querySelector('#slide_2');
	let sliederFon = document.querySelector('.slieder_fon');
	let colorFon = document.querySelector('#home');

	colorFon.classList.toggle("color_rose");
	colorFon.classList.toggle("color_blue");

	// debugger
	

  	if (slideOne.classList.contains("trash_previous"))  {
    	slideOne.classList.remove("trash_previous");
    	slideOne.classList.add("slide_2");
		slideTwo.classList.remove("slide_2_previous");
		slideTwo.classList.add("trash_next");
		return;
  }
    if (slideOne.classList.contains("slide_2_previous"))  {
    	slideOne.classList.remove("slide_2_previous");
    	slideOne.classList.add("trash_next");
		slideTwo.classList.remove("trash_previous");
		slideTwo.classList.add("slide_2");
		return;
  }

  if (slideOne.classList.contains("trash_next") == true) {
		slideOne.classList.remove("trash_next");
		slideOne.classList.add("slide_2");
		slideTwo.classList.remove("slide_2");
		slideTwo.classList.add("trash_next");
		return;
    	
  } 
	if (slideOne.classList.contains("trash_next") == false)  {
    	slideOne.classList.add("trash_next");
    	slideOne.classList.remove("slide_2");
		slideTwo.classList.add("slide_2", "visible_slide");
		slideTwo.classList.remove("trash_next");
		return;
  }

}

document.querySelector('#next').addEventListener('click', buttonNext);


const buttonPrev = (event) => {
	let slideOne = document.querySelector('#slide_1');
	let slideTwo = document.querySelector('#slide_2');
	let sliederFon = document.querySelector('.slieder_fon');
	let colorFon = document.querySelector('#home');

	colorFon.classList.toggle("color_rose");
	colorFon.classList.toggle("color_blue");
	
	// debugger

	if (slideOne.classList.contains("trash_next")) {
		slideOne.classList.remove("trash_next");
		slideOne.classList.add("slide_2_previous");
		slideTwo.classList.remove("slide_2");
		slideTwo.classList.add("trash_previous");
		return;
	}
	if (slideOne.classList.contains("slide_2")) {
		slideOne.classList.remove("slide_2");
		slideOne.classList.add("trash_previous");
		slideTwo.classList.remove("trash_next");
		slideTwo.classList.add("slide_2_previous");
		return;
	}
		

if  (slideOne.classList.contains("trash_previous")==false) {
    	slideOne.classList.add("trash_previous");
    	slideOne.classList.remove("slide_2_previous");
		slideTwo.classList.add("slide_2_previous", "visible_slide");
		slideTwo.classList.remove("trash_previous");
		return;
}
	if (slideOne.classList.contains("trash_previous")==true) {

		slideOne.classList.remove("trash_previous");
		slideOne.classList.add("slide_2_previous");
		slideTwo.classList.remove("slide_2_previous");
		slideTwo.classList.add("trash_previous");
		return;
  } 
	

}

document.querySelector('#prev').addEventListener('click', buttonPrev);

// PORTFOLIO BORDER
	const borderImage = (event) => {
	document.querySelectorAll('img').forEach(img => img.classList.remove('border_images'));
	event.target.closest('img').classList.add('border_images');
}


document.querySelector('#portfolio_border').addEventListener('click', borderImage);


// РОНДОМ ПОРТФОЛИО

const portfolioAktive = (event) => {
	let allA = document.querySelectorAll('a');
	allA.forEach(a => a.classList.remove('portfolio_aktive'));
	// console.log(allA);
	if (event.target.closest('a')) {
		event.target.closest('a').classList.add('portfolio_aktive');
	}
}

document.querySelector('.portfolio__filter').addEventListener('click', portfolioAktive);


const filterAktive = (event) => {
event.preventDefault();

let portfolioFilter = document.querySelector('.portfolio__filter');
let portfolioElem = document.querySelector('.portfolio_elem');
let imgDiv = document.querySelector('.portfolio_elem div');
let portfolioImg = document.querySelectorAll('#portfolio_border div');
let portfolioImgOne = document.querySelector('#portfolio_border img');

// 1. картинки внесли в массив
let arr = Array.from(portfolioImg);
let arrImg = Array.from(portfolioImg);
let result = [];

// 2. перемешали массив из п1. рондомно
function shuffle(arr) {
		
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
// рондом для п.2
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Записали новый массив из функции п.2
let newArr = shuffle(arr);

// 4. разместили новый массив на стр.

        for(let j=0; j < newArr.length; j++){
	portfolioElem.appendChild(newArr[j]); 
    };

}
document.querySelector('.portfolio__filter').addEventListener('click', filterAktive);



// ФУНКЦИЯ ДЛЯ ФОРМЫ
const formaSubmit = (event) => {
	event.preventDefault();
	const windows = document.querySelector('.window');
	const windowsSubject = document.querySelector('.window_subject');
	const windowsDescribew = document.querySelector('.window_describe'); 
	const subject = document.querySelector('.subject');
	const textarea = document.querySelector('.textarea');

	windows.style.display = 'block';
	if (subject.value == '' || textarea.value == '') {
		windowsSubject.innerHTML = "Без темы";
		windowsDescribew.innerHTML = "Без описания";
	
	}
	else {
		windowsSubject.innerHTML = "Тема: " +  subject.value;
		windowsDescribew.innerHTML = "Описание: " +  textarea.value;
	};
}

document.querySelector('.forma__contact-submit').addEventListener('click', formaSubmit);

// ФУНКЦИЯ НА ВАЛИДНОСТЬ
function ValidMail(email) {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById('email').value;
    console.log(myMail);
    let valid = re.test(myMail);
    if (valid) {
    	return myMail;
    }
    // if (valid == '') {
    // 	return document.getElementById('email').value = 'введите email';
    // }
    else {
       	return document.getElementById('email').value = 'неверно введен email';		
    }
    
}

document.getElementById('email').addEventListener('blur', ValidMail);



// ФУНКЦИЯ ДЛЯ ОКНА
const windowSubmit = (event) => {
	// event.preventDefault();
    let elemForma = document.querySelector('.subject');


	const subject = document.querySelector('.subject');
	const textarea = document.querySelector('.textarea');
	const name = document.querySelector('.name');
	const email = getElementById('email');
	event.preventDefault();
	const windows = document.querySelector('.window');
	windows.style.display = 'none';
	subject.value = '';
	textarea.value = '';
	name.value = '';
	email.value = '';

}

document.querySelector('.window-submit').addEventListener('click', windowSubmit);



// // HEADER SCROLL
// document.addEventListener('scroll', onScroll);

// function onScroll(event) {
// 	const curPos = window.scrollY;
// 	const divs = document.querySelectorAll('#wrapper>div');
// 	const links = document.querySelectorAll('.navigation a');
// 	// console.log(divs.offsetTop);
// 	// console.log(links);
// // debugger;
// 	divs.forEach((el) => {
// 		if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
// 			// console.log(el.offsetTop);
// 			links.forEach((a) => {
// 				a.classList.remove('nav_active');
// 				if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					
// 					a.classList.add('nav_active');
// 				}
// 			})
// 		}
// 	});
	
// };




// BURGER

function burgerRotate(event) {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const logo = document.querySelector('.header__logo__navigation');

	
	menu.style.display = 'block'
}
document.querySelector('.burger').addEventListener('click', burgerRotate);


 function burgerRotateNone(event) {
	const menu = document.querySelector('.menu');
		
	menu.style.display = 'none'
}
document.querySelector('.burger-active').addEventListener('click', burgerRotateNone);





