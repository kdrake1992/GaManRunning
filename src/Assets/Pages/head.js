export default function head(header, lang) {

    // Creates the initial div's used in header
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navBar');

    const navLang = document.createElement('div');
    navLang.setAttribute('id', 'navLang');

    // Side language change
    let navEn = document.createElement('button');
    navEn.innerHTML = 'English';

    let navJp = document.createElement('button');
    navJp.innerHTML = '日本語';

    navLang.appendChild(navEn);
    navLang.appendChild(navJp)

    // English NavBar
    if(lang = 'eng') {
        navBar.textContent = '';


        header.appendChild(navLang);
        console.log('English')
    }

    // Japanese NavBar
    else {
        navBar.textContent = '';

        header.appendChild(navLang);
        console.log('日本語です。')
    }
}