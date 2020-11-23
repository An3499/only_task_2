import Component, { ComponentProps } from '../../app/js/component';

export default class ModalAdd extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        let modal = document.querySelector(".modal")
        let closeBtn = document.querySelector('.button__close')
        closeBtn.addEventListener("click", () => {
            modal.classList.toggle('modal__effect_hide')
            modal.classList.toggle('modal__effect_show')
        })

    }

    destroy = () => {
        // Destroy functions
    }
}