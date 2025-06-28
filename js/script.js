$('#btnReset').click(function () {
    $('#blExample').toggleClass("reset");
    $(this).toggleClass("green");
    $(this).toggleClass("rosa");
    if ($(this).hasClass("green")) {
        $(this).text('Застосувати Reset.css');
    } else {
        $(this).text('Відключити Reset.css');
    }
});