
    /* Считываем начальные данные - START */

    const HOVER_ARRAY : NodeListOf<HTMLHeadingElement> = document.querySelectorAll('.HoverElement');
    const HoverLine : HTMLDivElement | HTMLElement = document.getElementById('LineMenu');
    const MenuHover: HTMLDivElement | HTMLElement = document.getElementById('MenuHover');

    /* Считываем начальные данные - END */

    window.addEventListener('load', () => {
        const currentWidth = HOVER_ARRAY[0].offsetWidth;
        const currentLeft = HOVER_ARRAY[0].offsetLeft;
        HoverLine.style.width = `${currentWidth}px`;
        HoverLine.style.left = `${currentLeft}px`;
    });

    HOVER_ARRAY.forEach(element => {
         element.addEventListener('mouseover', (ev)=> {
             const newWidth = ev.target.offsetWidth;
             const newLeft = ev.target.offsetLeft;

             HoverLine.style.left = `${newLeft}px`;
             HoverLine.style.width = `${newWidth}px`;
         });
    });

    MenuHover.addEventListener('mouseout', (ev) => {
        if(ev.relatedTarget !== MenuHover) {
            HoverLine.style.left = '0px';
            HoverLine.style.width = `${HOVER_ARRAY[0].offsetWidth}px`;
        }
    })