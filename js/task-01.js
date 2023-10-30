const listItems = document.querySelectorAll('.item');
console.log(`Number of categories:`, listItems.length);

listItems.forEach(listItem => {
    const listTitle = listItem.querySelector('h2').textContent;
    const listElem = listItem.querySelectorAll('li');

console.log(`Category:`, listTitle);
console.log(`Elements:`, listElem.length);
});
