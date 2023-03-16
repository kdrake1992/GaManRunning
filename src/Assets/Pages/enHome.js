export default function enHome(mid) {

    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = 'Work in Progress';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}