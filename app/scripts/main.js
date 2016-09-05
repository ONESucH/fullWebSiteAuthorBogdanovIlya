var allElements = {
    rightAnimatedPanel: $('.right-animated-panel'),
    mainBlock: $('#mainBlock'),
    starsStatistic: $('#starsStatistic'),
    buttonOne: $('#buttonOne'),
    takeDataFromInput: $('#takeDataFromInput')
};
var logic = false;

function showAndHideElements() {
    logic = !logic;
    if (logic) {
        allElements.mainBlock.css({
            'width': '75%'
        });
        allElements.rightAnimatedPanel.css({
            'display': 'block',
            'width': '25%',
            'opacity': '10'
        });
    } else  {
        allElements.mainBlock.css({
            'width': '100%'
        });
        allElements.rightAnimatedPanel.css({
            'width': '0',
            'overflow': 'hidden',
            'opacity': '0'
        });
    }
}

function modalWindow() {
    var elem = getElementsByClassName('top-container');
    elem.getAttribute('background-image');
    elem.lightBox();
    console.log(elem, 'Выполнено');
}

function siteStatistics(one, two, three, four, five) {
    var takeDataFromInput = allElements.takeDataFromInput.val();
    var teg = document.getElementsByTagName('i');
    if (takeDataFromInput === '') {
        alert('Введите ваш email');
        return false;
    }
    switch (teg) {
        case 'one':
            teg.css({
               'background': 'orange'
            });
            break;
        case 'two':
            teg.css({
                'background': 'orange'
            });
            break;
        case 'three':
            teg.css({
                'background': 'orange'
            });
            break;
        case 'four':
            teg.css({
                'background': 'orange'
            });
            break;
        case 'five':
            teg.css({
                'background': 'orange'
            });
            break;
    }
    console.log(teg);
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    allElements.takeDataFromInput.val('');
}