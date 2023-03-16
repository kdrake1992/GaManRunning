import '../node_modules/@fortawesome/fontawesome-free/js/all';
import './style.css';
import logo from './Assets/Logos/Main.png';

import foot from './Assets/Functions/foot';
import mid from './Assets/Pages/mid'

// Intial Site Loadup
function component() {
    const GaMan = document.body;

    // Logo import
    let mainLogo = new Image();
    mainLogo.src = logo;
    mainLogo.setAttribute('id', 'mainLogo');

    // Page layout
    const header = document.createElement('div');
    header.classList.add('header');

    const middle = document.createElement('div');
    middle.classList.add('middle');
    middle.appendChild(mainLogo);
    mid(header, middle);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    foot(footer);

    GaMan.appendChild(header);
    GaMan.appendChild(middle);
    GaMan.appendChild(footer);

    return GaMan;
}

component();