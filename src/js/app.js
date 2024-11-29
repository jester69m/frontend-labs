require('../css/app.css');

/** ******** Your code here! *********** */

document.addEventListener('DOMContentLoaded', () => {
    const openTeacherInfoPopup = document.querySelector('#open-teacher-info');
    const openAddTeacherPopup = document.querySelector('#open-add-teacher');
    const closeButtons = document.querySelectorAll('.close-btn');

    if (openTeacherInfoPopup) {
        openTeacherInfoPopup.addEventListener('click', () => {
            document.getElementById('popup-teacher-info').style.display = 'flex';
        });
    }

    if (openAddTeacherPopup) {
        openAddTeacherPopup.addEventListener('click', () => {
            document.getElementById('popup-add-teacher').style.display = 'flex';
        });
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.popup').style.display = 'none';
        });
    });
});
