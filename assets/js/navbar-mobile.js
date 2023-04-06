const menu = document.querySelector('.navbar')
const menuButton = document.querySelector('.open-close-mobile-navbar')
const bar1 = document.querySelector('.mobile-navbar-bar1')
const bar2 = document.querySelector('.mobile-navbar-bar2')
const bar3 = document.querySelector('.mobile-navbar-bar3')

class buttonMenu {
    constructor() {
        this.closed = true
        menuButton.addEventListener('click', ()=>{
            this.changeButton()
    
            if (this.closed === false) {
                this.closed = true
            } else {
                this.closed = false
            }
        })
    }

    changeButton() {
        if (this.closed === true) {
            /* ABRIR MENU */
    
            bar3.style.display = "flex"
            bar1.style.display = "flex"

            bar3.style.rotate = "-45deg"
            bar1.style.rotate = "45deg"
            
            bar3.style.top = "1.5rem"
            bar1.style.top = "1.5rem"
            bar3.style.right = "52%"
            bar2.style.right = "52%"
            bar2.style.width = "0px"
            bar1.style.right = "52%"

            menu.style.right = "0"



        }
        else {
            /* FECHAR MENU */
            bar3.style.display = "flex"
            bar1.style.display = "flex"

            bar3.style.rotate = "0deg"
            bar1.style.rotate = "0deg"
            
            bar3.style.top = "2.2rem"
            bar1.style.top = "0.8rem"
            bar3.style.right = "0.5rem"
            bar2.style.right = "0.5rem"
            bar2.style.width = "35px"
            bar1.style.right = "0.5rem"

            menu.style.right = "-50%"
    
        }
    
    }




    
}

const p1 = new buttonMenu()