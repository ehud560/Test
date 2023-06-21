const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', { delay: 350, origin: 'left' })
sr.reveal('.home-img', { delay: 350, origin: 'right' })

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact', { delay: 200, origin: 'bottom' })

function validateForm() {
    var email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    // בדיקת תקינות כתובת האימייל עם ביטוי רגולרי
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email");
        return false;
    }

    // אם עבר את כל הבדיקות והערכים תקינים, נעביר לעמוד תודה
    // כאן ניתן לבצע פעולות נוספות כמו שמירת הנתונים במסד נתונים או הצגת מידע נוסף למשתמש

    alert("Thanks for your sending!");
    return true;
}
