import head from './head';

export default function jpHome(header, mid) {

    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = '工事中';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}