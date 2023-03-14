export default function mid(mid) {
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
}