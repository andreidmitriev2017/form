function createForm(form, phpURL) {
    let contactForm = document.querySelector(form),
        contactInputs = document.getElementsByTagName('input'),
        contactMessage = document.createElement('div'),
        messages = {
            loading: "Загрузка...",
            success: "Спасибо за регистрацию! Скоро мы с Вами свяжемся!",
            failure: "Что-то пошло не так",
        };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactForm.appendChild(contactMessage);
        
        let request = new XMLHttpRequest();
        request.open('POST', phpURL);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (this.readyState < 4) {
                contactMessage.innerHTML = messages.loading;
            } else if (this.readyState === 4 && this.status == 200) {
                contactMessage.innerHTML = messages.success;
            } else {
                contactMessage.innerHTML = messages.failure;
            }
        });

        for (let input of contactInputs) {
            input.value = '';
        }
    }); 
};