var allElements = {
    rightAnimatedPanel: $('#rightAnimatedPanel'),
    mainBlock: $('#mainBlock'),
    starsStatistic: $('#starsStatistic')
};
var logic = false;

$(window).scroll(function () {
    Scrollissimo.knock();
    console.log('Работает скрол animated');
});

function showAndHideElements() {
    logic = !logic;
    if (logic) {
        allElements.mainBlock.css({
            'width': '75%'
        });
        allElements.rightAnimatedPanel.css({
            'width': '25%',
            'display': 'block'
        });
    } else  {
        allElements.mainBlock.css({
            'width': '100%'
        });
        allElements.rightAnimatedPanel.css({
            'width': '0'
        });
    }
}

function siteStatistics(one, two, three, four, five) {
    var teg = document.getElementsByTagName('i');
    teg.className = 'stars-statistic';
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
}