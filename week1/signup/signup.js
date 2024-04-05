let isName = false;
let isEmail = false;
let isAge = false;
let isPassword = false;
let isPasswordcheck = false;


function nameCheck() {
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if (name.value === '') {
        nameError.style.color = '#FC0E0E';
        nameError.textContent = '필수 입력 항목입니다.';
        isName = false;
    } else {
        nameError.style.color = '#03711B';
        nameError.textContent = '멋진 이름이네요!';
        isName = true;
    }

    formCheck();
}

document.getElementById("name").addEventListener("input", nameCheck);



function emailCheck() {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; 

    if (email.value === '' || emailPattern.test(email.value) == false) {
        emailError.style.color = '#FC0E0E';
        emailError.textContent = '올바른 이메일 형식이 아닙니다.';
        isEmail = false;
    } else {
        emailError.style.color = '#03711B';
        emailError.textContent = '올바른 이메일 형식입니다!';
        isEmail = true;
    }

    formCheck();
}

document.getElementById("email").addEventListener("input", emailCheck);



function ageCheck() {
    const age = document.getElementById("age");
    const ageError = document.getElementById("ageError");

    if (age.value === '') {
        ageError.style.color = '#FC0E0E';
        ageError.textContent = '나이를 입력해주세요!';
        isAge = false;
    } else if(isNaN(age.value) == true) {
        ageError.style.color = '#FC0E0E';
        ageError.textContent = '나이는 숫자 형식이어야 합니다!';
        isAge = false;
    } else {
        if (parseInt(age.value) < 0) {
            ageError.style.color = '#FC0E0E';
            ageError.textContent = '나이는 음수가 될 수 없습니다!';
            isAge = false;
        } else if ((age.value) % 1 !== 0) {
            ageError.style.color = '#FC0E0E';
            ageError.textContent = '나이는 소수가 될 수 없습니다!';
            isAge = false;
        } else if (parseInt(age.value) < 19) {
            ageError.style.color = '#FC0E0E';
            ageError.textContent = '미성년자는 가입할 수 없습니다!';
            isAge = false;
        } else {
            ageError.style.color = '#03711B';
            ageError.textContent = '올바른 나이 형식입니다!';
            isAge = true;
        }
    }

    formCheck();
}

document.getElementById("age").addEventListener("input", ageCheck);



function passwordCheck() {
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])+/;

    if (password.value === '' || (password.value).length < 4) {
        passwordError.style.color = '#FC0E0E';
        passwordError.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        isPassword = false;
    } else if ((password.value).length > 12) {
        passwordError.style.color = '#FC0E0E';
        passwordError.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        isPassword = false;
    } else if (passwordPattern.test(password.value) == false) {
        passwordError.style.color = '#FC0E0E';
        passwordError.textContent = '영어, 숫자, 특수문자를 모두 포함해야 합니다.';
        isPassword = false;
    } else {
        passwordError.style.color = '#03711B';
        passwordError.textContent = '올바른 비밀번호입니다!';
        isPassword = true;
    }

    formCheck();
}

document.getElementById("password").addEventListener("input", passwordCheck);



function passwordcheckCheck() {
    const passwordcheck = document.getElementById("passwordcheck");
    const passwordcheckError = document.getElementById("passwordcheckError");
    const password = document.getElementById("password");

    if (passwordcheck.value === '' || password.value != passwordcheck.value) {
        passwordcheckError.style.color = '#FC0E0E';
        passwordcheckError.textContent = '비밀번호가 일치하지 않습니다.';
        isPasswordcheck = false;
    } else {
        passwordcheckError.style.color = '#03711B';
        passwordcheckError.textContent = '비밀번호가 일치합니다.';
        isPasswordcheck = true;
    }

    formCheck();
}

document.getElementById("passwordcheck").addEventListener("input", passwordcheckCheck);
document.getElementById("password").addEventListener("input", function() {
    passwordcheckCheck();
});

function formCheck() {
    const signupBtn = document.getElementById("signupBtn");

    if (isName && isEmail && isAge && isPassword && isPasswordcheck) {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
}

formCheck();


const modalContainer = document.querySelector(".modalContainer");
const closeBtn = document.getElementById("closeButton");

document.getElementById("signupBtn").addEventListener("click", function(event) {
    event.preventDefault();
    modalContainer.style.display = "block";
});

function close() {
    modalContainer.style.display = "none";
    document.querySelector("form").submit();
}

closeBtn.addEventListener("click", close);