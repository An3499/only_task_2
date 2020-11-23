import Component, { ComponentProps } from '../../app/js/component';

export default class Fab extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        let modalAdd = document.querySelector('.modal')

        console.log(element)
        element.component.addEventListener("click",() => {
            modalAdd.classList.toggle('modal__effect_hide')
            modalAdd.classList.toggle('modal__effect_show')
        })
    }

    destroy = () => {
        // Destroy functions
    }
}