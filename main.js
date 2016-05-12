//alert("HAH"); <- don't use this. Annoys people.
console.log('I am actually a web developer now');

//ten thousand here, but reducing it to ten
var mAx = '';
for (var i = 0 ;  i<10; i++)
	mAx += "Anti-hero ";

document.querySelector('.paragraph-ten-thousand').innerHTML = mAx;

document.querySelector('.button-tone-down').onclick = function()
{
	//console.log('Testing click');
	document.querySelector('.paragraph-ten-thousand').innerHTML = 'nah';
}

document.querySelector('.list-element-emphasis').onmouseover = function()
{
	console.log('List element selected');
	document.querySelector('.list-element-emphasis').innerHTML = 'mousedover';
}

//Ways to manipulate objects

//document.querySelector('.link-google').href = 'https://bing.com';

//document.querySelector('.site-header').classList.add('site-header-tall');
//document.querySelector('.site-header').classList.remove('site-header-tall');
//document.querySelector('.site-header').classList.toggle('site-header-tall');

//document.querySelector('.big-image').style.transform = 'scale(0.5)';
//document.querySelector('.big-image').marginLeft = 'scale(0.5)'; (? Dunno if works with scale, just thrown it in there)