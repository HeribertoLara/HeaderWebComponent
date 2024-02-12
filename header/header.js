class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isActive = false;
        // Add initialization code here
    }
    
    connectedCallback() {
        this.render();
        this.addEventListeners();
        
    }

    addEventListeners() {
        this.shadowRoot.querySelector('.menu-toggle').addEventListener('click', () => {
            this.isActive = !this.isActive;
            this.toggleNav();
            console.log(this.isActive);
        });
    }

    toggleNav() {
        console.log('toggleNav');
        const nav = this.shadowRoot.querySelector('.menu-toggle');
        if (this.isActive) {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }

    static get observedAttributes() {
        return ['image', 'first', 'second', 'third'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[attr] = newValue;
        }
    }

 


    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <header>
                <image src=${this.image} />
                <button class="menu-toggle" #toogle>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                ${this.first}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ${this.second}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                ${this.third}
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
            <style>
                :host .menu-toggle {
                    display: block;
                    background: none;
                    border: none;
                    position: fixed;
                    top: 0;
                    right: 0;
                    margin: 1rem;
                }
                :host button span {
                    display: block;
                    width: 30px;
                    height: 5px;
                    background: black;
                    margin: 5px;
                }
                :host nav ul {
                    display: grid;
                    place-items: center;
                }
                :host nav ul li {
                    margin: 0 1rem;
                    list-style: none;
                    text-decoration: none;
                }
                :host nav ul li a {
                    text-decoration: none;
                    color: black;
                }
            </style>
        `;
    }




    render() {
        const template = this.getTemplate();
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }



    /* connectedCallback() {
        this.render();
    } */ // Add the closing brace here

}

customElements.define('my-header', Header);
