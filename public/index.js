const $loginForm = $('[data-login-form]');
const $formName = $('[name="username"]');
const $formPW = $('[name="password"]')

$loginForm.submit((event) => {
    event.preventDefault();

    let data = {
        username: $formName.val(),
        password: $formPW.val()
    }

    $.post('/token', data, (res) => {
        console.log(res);
        localStorage.setItem('auth', res);
        window.location.replace('/home.html');
    });
})