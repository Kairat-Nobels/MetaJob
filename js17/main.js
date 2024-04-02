// 1. Перекрасьте все ссылки в header в красный цвет
const links = document.querySelectorAll('li>a');
links.forEach(link => {
    link.style.color = 'red'
})

// 2. У кнопки Contact us измените текстовое содержание на 'Investigate'
const btn = document.querySelector('button');
btn.innerText = "Investigate";
btn.style.textTransform = "capitalize";

// 3. Главный заголовок в секции переведите в верхний регистр
const h1 = document.querySelector('h1');
h1.style.textTransform = "uppercase";

// 4. Измените высоту всей секции
const section = document.querySelector('.container');
section.style.height = '100%'

// 5. Добавьте дополнительную кнопку под кнопкой contact us
const info = document.querySelector('.info');
const mybtn = document.createElement('button')
mybtn.textContent = 'contact us';
mybtn.style.textTransform = 'lowercase'
info.append(mybtn);