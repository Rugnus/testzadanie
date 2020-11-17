// СДЕЛАЛ ВСЁ НА JQuery ДЛЯ ЭКОНОМИИ ВРЕМЕНИ, НО ЕСЛИ НАДО, ТО МОГУ СДЕЛАТЬ НА ЧИСТОМ JS

$(document).ready(function () {

    // ВЫБОРКА НУЖНЫХ НАМ ЭЛЕМЕНТОВ

    var colorSelect = $('#color');                  // Выбор цвета
    var cellSelect = $('.form__cell');              // Выбор ячейки
    var buttonSelect = $('.form__button');          // Сама кнопка, после которой происходит изменения


    // СОВЕРШАЕМ ИЗМЕНЕНИЕ ПРИ НАЖАТИИ НА КНОПКУ
    $(buttonSelect).on('click', function() {


        // ЕСЛИ БЫЛ УКАЗАН КРАСНЫЙ ЦВЕТ
        if (colorSelect.val() == 'red') {
            // Удаляем все предыдущие стили с цветом, дабы при каждом нажатии цвет полностью менялся на нужный
            $('td').removeClass('color-green');
            $('td').removeClass('color-blue');
            $('td').removeClass('color-yellow');
            // Добавляем цвет который выбрали
            $('td').addClass('color-red');
            
            // Убираем белый цвет у выбранной в прошлый раз ячейки и добавляем его в выбранную в этот раз
            $('.cell').removeClass('nothing');
            $('.cell' + cellSelect.val()).addClass('nothing');
        }  
        
        // ЕСЛИ БЫЛ УКАЗАН ЗЕЛЁНЫЙ ЦВЕТ
        else if (colorSelect.val() == 'green') {
            console.log(colorSelect.val());
            console.log(cellSelect.attr('value'));
            console.log(cellSelect.val());
            

            $('td').removeClass('color-red');
            $('td').removeClass('color-blue');
            $('td').removeClass('color-yellow');

            $('td').addClass('color-green');
            
            
            $('.cell').removeClass('nothing');
            $('.cell' + cellSelect.val()).addClass('nothing');
            
        }

        // ЕСЛИ БЫЛ УКАЗАН СИНИЙ ЦВЕТ
        else if (colorSelect.val() == 'blue') {
            console.log(colorSelect.val());
            console.log(cellSelect.attr('value'));
            console.log(cellSelect.val());
            
            $('td').removeClass('color-red');
            $('td').removeClass('color-green');
            $('td').removeClass('color-yellow');

            $('td').addClass('color-blue');
            
            
            $('.cell').removeClass('nothing');
            $('.cell' + cellSelect.val()).addClass('nothing');
            
        }

        // ЕСЛИ БЫЛ УКАЗАН ЖЁЛТЫЙ ЦВЕТ
        else if (colorSelect.val() == 'yellow') {
            console.log(colorSelect.val());
            console.log(cellSelect.attr('value'));
            console.log(cellSelect.val());
            
            $('td').removeClass('color-red');
            $('td').removeClass('color-blue');
            $('td').removeClass('color-green');

            $('td').addClass('color-yellow');    
            
            $('.cell').removeClass('nothing');
            $('.cell' + cellSelect.val()).addClass('nothing');
            
        }
    });
});
