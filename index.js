console.log('foo')
const buttonShows = document.querySelectorAll('.showORHide');
const areas = document.querySelectorAll('#LEGEND [id$=_AREA]');
buttonShows.forEach(element => {
    element.addEventListener('click', function(){
        const target = document.querySelector('#' + element.getAttribute('data-room'));
        if(!target.classList.contains('not-active')){
            target.classList.add('not-active');
            element.classList.add('not-active');
        } else {
            target.classList.remove('not-active');
            element.classList.remove('not-active');
        }
    });
});
const showSelection = (elements, area) => {
    area.classList.add('clicked');
    elements.forEach(element => {
        element.classList.add('not-active')
    });
    const id = area.getAttribute('id').replace('_AREA', '')
    const shownElements = document.querySelectorAll(`#MAP > [id^=ROOM_] [id^=AREA_${id}], #MAP > [id^=ROOM_] [id^=AREA_${id}] *`);
    shownElements.forEach(element => {
        element.classList.remove('not-active')
    });
};
const hideSelection = (elements, area) => {
    area.classList.remove('clicked');
    elements.forEach(element => {
        element.classList.remove('not-active')
    });
};
areas.forEach(area => {
    const elements = document.querySelectorAll('#MAP > [id^=ROOM_] [id^=AREA_]'); //.classList.add('not-active')
    area.addEventListener('mouseout', function(){
        hideSelection(elements, area);
    });
    area.addEventListener('mouseover', function(){
        showSelection(elements, area);
    });
    area.addEventListener('click', function(){
        if(area.classList.contains('clicked')){
            hideSelection(elements, area);
        } else {
            showSelection(elements, area);
        }
    });
});