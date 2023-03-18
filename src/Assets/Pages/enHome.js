import head from './head';

export default function enHome(header, mid) {

    head(header, 'eng');
    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = 'Work in Progress';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}