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
        this.shadowRoot.querySelector('.header__button').addEventListener('click', () => {
            this.isActive = !this.isActive;
            this.toggleNav();
        });
  
    }
  
    toggleNav() {
      const menu = this.shadowRoot.querySelector('nav');
      const button = this.shadowRoot.querySelector('.menu-toggle');
      const width = window.innerWidth;
  
      if (width >= 760) {
          // Si estamos en modo escritorio
          if (this.isActive) {
              menu.style.display = 'flex';
              button.style.display = 'block'; // Oculta el botón
          } else {
              menu.style.display = 'none';
              button.style.display = ''; // Muestra el botón
          }
      } else {
          // Si estamos en modo móvil
          if (this.isActive) {
              menu.style.display = 'grid';
          } else {
              menu.style.display = 'none';
          }
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
        <header class="header">
        <section class="header__section">
            <img src=${this.image} class="header__image" />
            <button class="header__button header__button--toggle"> 
              <span></span>
              <span></span>
              <span></span>
            </button>
        </section>
        <nav class="header__nav">
            <ul class="nav__list">
                <li class="list__item">
                    <a href="#" class="item__link">
                        ${this.first}
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="item__link">
                        ${this.second}
                    </a>
                </li>
                <li class="list__item">
                    <a href="#" class="item__link">
                        ${this.third}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
        `;
        return template;
    }
  
  /*   getStyles() {
        return `
            <style>
              header img {
                  width: 10rem;
                  height: 100px;
              }
               .menu-toggle {
                  padding: 10px 10px;
                  background: #ffff;
                  border: none;
                  border-radius: 50%;
                  box-shadow: 0 0 5px 0 black;
                  position: fixed;
                  top: 0;
                  right: 0;
                  margin: 1rem;
                  trasicion: all 0.3s ease;
                }
              button:active {  
                  transform: scale(0.9);
                  background: #ffff; 
                  border-radius: 50%;
                  box-shadow: 0 0 5px 0 black;
                  }
              button span {
                  display: block;
                  width: 30px;
                  height: 5px;
                  background: black;
                  margin: 5px;
                }
              nav {
                  place-items: center;
                  background: var(--backgrund-color-dark);
                  height: 100vh;
                  }
              nav ul {
                  display: grid;
                  place-items: center;
                  height: 33.3%;
                }
              nav ul li {
                  margin: 0 1rem;
                  list-style: none;
                  text-decoration: none;
                  top: 0;
                }
              nav ul li a {
                  text-decoration: none;
                  color: var(--font-white);
                  font-size: 1rem;
                  font-weight: 600;
                }
                  
              }
            </style>
        `;
    } */
  
    render() {
        const template = this.getTemplate();
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
  
  }
  
  customElements.define('my-header', Header);