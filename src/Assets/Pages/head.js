import mid from './mid';

export default function head(header, lang, mid) {

    // Creates the initial div's used in header
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navBar');

    const navLang = document.createElement('div');
    navLang.setAttribute('id', 'navLang');

    // The dropdown
    // Home page
    const home = document.createElement('button');
    home.classList.add('navBarButtons');


    // Training page
    const training = document.createElement('button');
    training.classList.add('navBarButtons');


    // About page
    const about = document.createElement('button');
    about.classList.add('navBarButtons');

    // Contact page
    const contact = document.createElement('button');
    contact.classList.add('navBarButtons');


    // Side language change
    const navEn = document.createElement('button');
    navEn.innerHTML = 'English';

    const navJp = document.createElement('button');
    navJp.innerHTML = '日本語';

    navLang.appendChild(navEn);
    navLang.appendChild(navJp)

    // English NavBar
    if(lang = 'eng') {
        home.innerHTML = 'Home';
        training.innerHTML = 'Training';
        about.innerHTML = 'About'
        contact.innerHTML = 'Contact'

        navBar.appendChild(home);
        navBar.appendChild(training);
        navBar.append(about);
        navBar.append(contact);
        navBar.appendChild(navLang);
        header.appendChild(navBar);
        console.log('English')
    }

    // Japanese NavBar
    else {
        home.innerHTML = 'Home';
        training.innerHTML = 'Training';
        about.innerHTML = 'About'
        contact.innerHTML = 'Contact'

        navBar.appendChild(home);
        navBar.appendChild(training);
        navBar.append(about);
        navBar.append(contact);
        navBar.appendChild(navLang);
        header.appendChild(navBar);
        console.log('日本語です。')
    }

    // Adds event listener to menu
    home.addEventListener('click', () => {
        console.log('home');
    });
    training.addEventListener('click', () => {
        console.log('training');
    });
    about.addEventListener('click', () => {
        console.log('about');
    });
    contact.addEventListener('click', () => {
        console.log('contact');
    });

    navEn.addEventListener('click', () => {
        console.log('English');
    });
    navJp.addEventListener('click', () => {
        console.log('Japanese');
    });
}