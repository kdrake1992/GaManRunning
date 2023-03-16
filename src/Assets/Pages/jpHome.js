export default function jpHome(mid) {

    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = '工事中';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}