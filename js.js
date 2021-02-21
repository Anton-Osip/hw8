document.head.insertAdjacentHTML('beforeend', '<meta charset="utf-8" />');
document.head.insertAdjacentHTML('beforeend', '<meta name="author" content="Осипчик Антон" />');
document.head.insertAdjacentHTML('beforeend', '<title>HW_8</title>');
document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.gstatic.com">');
document.head.insertAdjacentHTML('beforeend', `<link href="https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap" rel = "stylesheet" > `);
document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.gstatic.com">');

const body = document.body;

const section = document.createElement('section');
const title = document.createElement('h1');
const subtitle = document.createElement('p');
const cards = document.createElement('div');
const card1 = document.createElement('div');
const card2 = document.createElement('div');
const cardSubtitle1 = document.createElement('p');
const cardSubtitle2 = document.createElement('p');
const cardTitle1 = document.createElement('h2');
const cardTitle2 = document.createElement('h2');
const cardDescription1 = document.createElement('p');
const cardDescription2 = document.createElement('p');
const cardBtn1 = document.createElement('button');
const cardBtn2 = document.createElement('button');



body.appendChild(section);
section.appendChild(title);
section.appendChild(subtitle);
section.appendChild(cards);
cards.appendChild(card1);
cards.appendChild(card2);
card1.appendChild(cardSubtitle1);
card2.appendChild(cardSubtitle2);
card1.appendChild(cardTitle1);
card2.appendChild(cardTitle2);
card1.appendChild(cardDescription1);
card2.appendChild(cardDescription2);
card1.appendChild(cardBtn1);
card2.appendChild(cardBtn2);



title.innerHTML = 'Choose Your Option'
subtitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
cardSubtitle1.innerHTML = 'FREELANCER'
cardSubtitle2.innerHTML = 'STUDIO'
cardTitle1.innerHTML = 'Initially designed to'
cardTitle2.innerHTML = 'Initially designed to'
cardDescription1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
cardDescription2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
cardBtn1.innerHTML = 'START HERE'
cardBtn2.innerHTML = 'START HERE'


section.style.height = '100vh';
section.style.display = 'flex';
section.style.flexDirection = 'column';
section.style.alignItems = 'center';
section.style.justifyContent = 'center';

title.style.fontFamily = 'Arvo';
title.style.fontStyle = 'normal';
title.style.fontWeight = 'normal';
title.style.fontSize = '36px';
title.style.lineHeight = '48px';
title.style.color = '#212121';
title.style.marginBottom = '10px';

subtitle.style.fontFamily = 'Open Sans';
subtitle.style.fontStyle = 'normal';
subtitle.style.fontWeight = 'normal';
subtitle.style.fontSize = '14px';
subtitle.style.lineHeight = '26px';
subtitle.style.color = '#9FA3A7';
subtitle.style.marginBottom = '#55px';

cards.style.display = 'flex';
cards.style.alignItems = 'center';
cards.style.justifyContent = 'space-between';
cards.style.width = '800px';


card1.style.border = '1px solid #E8E9ED';
card1.style.padding = '80px 95px 75px';
card1.style.textAlign = 'center';
card1.style.borderRadius = '16px 0 0 16px';

card2.style.border = '1px solid #E8E9ED';
card2.style.padding = '80px 95px 75px';
card2.style.textAlign = 'center';
card2.style.backgroundColor = '#8F75BE';
card2.style.borderRadius = '0 16px  16px 0';


cardSubtitle1.style.fontFamily = 'Montserrat';
cardSubtitle1.style.fontStyle = 'normal';
cardSubtitle1.style.fontBold = 'bold';
cardSubtitle1.style.fontSize = '12px';
cardSubtitle1.style.lineHeight = '15px';
cardSubtitle1.style.letterSpacing = '2.4px';
cardSubtitle1.style.color = '#9FA3A7';
cardSubtitle1.style.marginBottom = '20px';

cardSubtitle2.style.fontFamily = 'Montserrat';
cardSubtitle2.style.fontStyle = 'normal';
cardSubtitle2.style.fontWeight = 'bold';
cardSubtitle2.style.fontSize = '12px';
cardSubtitle2.style.lineHeight = '15px';
cardSubtitle2.style.letterSpacing = '2.4px';
cardSubtitle2.style.color = '#fff';
cardSubtitle2.style.marginBottom = '20px';


cardTitle1.style.fontFamily = 'Arvo';
cardTitle1.style.fontStyle = 'normal';
cardTitle1.style.fontWeight = 'normal';
cardTitle1.style.fontSize = '36px';
cardTitle1.style.lineHeight = '46px';
cardTitle1.style.color = ' #212121';
cardTitle1.style.marginBottom = '25px';

cardTitle2.style.fontFamily = 'Arvo';
cardTitle2.style.fontStyle = 'normal';
cardTitle2.style.fontWeight = 'normal';
cardTitle2.style.fontSize = '36px';
cardTitle2.style.lineHeight = '46px';
cardTitle2.style.color = ' #fff';
cardTitle2.style.marginBottom = '25px';


cardDescription1.style.fontFamily = 'Open Sans';
cardDescription1.style.fontStyle = 'normal';
cardDescription1.style.fontWeight = 'normal';
cardDescription1.style.fontSize = '12px';
cardDescription1.style.lineHeight = '22px';
cardDescription1.style.color = '#9FA3A7';
cardDescription1.style.marginBottom = '52px';

cardDescription2.style.fontFamily = 'Open Sans';
cardDescription2.style.fontStyle = 'normal';
cardDescription2.style.fontWeight = 'normal';
cardDescription2.style.fontSize = '12px';
cardDescription2.style.lineHeight = '22px';
cardDescription2.style.color = '#fff';
cardDescription2.style.marginBottom = '52px';


cardBtn1.style.border = '3px solid #FFC80A';
cardBtn1.style.borderRadius = '46px';
cardBtn1.style.background = 'transparent';
cardBtn1.style.fontFamily = 'Montserrat';
cardBtn1.style.fontStyle = 'normal';
cardBtn1.style.fontWeight = 'bold';
cardBtn1.style.lineHeight = '15px';
cardBtn1.style.letterSpacing = ' 2.4px';
cardBtn1.style.color = '2.4px';
cardBtn1.style.outline = 'none';
cardBtn1.style.cursor = 'pointer';
cardBtn1.style.padding = '15px 25px';

cardBtn2.style.border = '3px solid #FFC80A';
cardBtn2.style.borderRadius = '46px';
cardBtn2.style.background = 'transparent';
cardBtn2.style.fontFamily = 'Montserrat';
cardBtn2.style.fontStyle = 'normal';
cardBtn2.style.fontWeight = 'bold';
cardBtn2.style.lineHeight = '15px';
cardBtn2.style.letterSpacing = ' 2.4px';
cardBtn2.style.color = '2.4px';
cardBtn2.style.outline = 'none';
cardBtn2.style.cursor = 'pointer';
cardBtn2.style.padding = '15px 25px';
cardBtn2.style.color = '#fff';