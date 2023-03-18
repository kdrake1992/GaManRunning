import jpHome from "./jpHome";
import enHome from "./enHome";

export default function mid(header, mid) {
    // Reset
    // header.textContent = '';
    // mid.textContent = '';

    // Create language option panel
    const choice = document.createElement('div');
    choice.classList.add('choice')

    // Choose lanaguage
    const eng = document.createElement('button');
    eng.innerHTML = 'English';
    choice.appendChild(eng);

    const nihongo = document.createElement('button');
    nihongo.innerHTML = '日本語';
    choice.appendChild(nihongo);

    mid.appendChild(choice);

    // Event listeners
    eng.addEventListener('click', () => {
        choice.remove();
        enHome(header, mid);
    })

    nihongo.addEventListener('click', () => {
        choice.remove();
        jpHome(header, mid)
    })
}