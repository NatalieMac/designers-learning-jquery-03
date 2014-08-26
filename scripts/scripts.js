/* Append a sentence to the <body> element */
// $('body').append('This was added with jQuery!');

/* Append a sentence to the <div class="content"> element */
// $('.content').append('This was added with jQuery!');

/* Prepend a sentence to the <div class="content"> element */
// $('.content').prepend('This was added with jQuery!');

/* Add a sentence after the <h1> */
// $('h1').after('This was added with jQuery!');

/* Add a sentence before the <h1> */
// $('h1').before('This was added with jQuery!');

/* Create a new paragraph element */
// var para = $('<p class="highlight">This is a new paragraph created with jQuery</p>');

/* Append the new paragraph to the <div class="content"> */
// para.appendTo('.content');

/* Prepend the new paragraph to the <div class="content"> */
// para.prependTo('.content');

/* Insert the new paragraph after the <h1> */
// para.insertAfter('h1');

/* Insert the new paragraph before the <h1> */
// para.insertBefore('h1');

/* Create a new paragraph element in an easier-to-read way */
var para = $('<p></p>', {
	class: 'highlight',
	id: 'new-para',
	text: 'This paragraph was added to the page with jQuery!'
});

/* Move the <h1> to the end of the <div class="content"> */
// $('h1').appendTo('.content');

/* Move the first paragraph to end of the document, just before the </body> */
// $('p').first().appendTo('body');