document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showPopupBtn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'flex';
    });

    document.getElementById('closePopupBtn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('cancelBtn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('okBtn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });
});
