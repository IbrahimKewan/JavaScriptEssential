var xhr = new XMLHttpRequest();
var url = './new_article.json';
xhr.open('GET', url,true);
xhr.responseType = 'json';

xhr.onload = function (){
    var news = xhr.response.news;
    var newsDicv = document.getElementById('news');

    news.forEach(function(new_art) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = new_art.title;

        var description = document.createElement('p');
        description.textContent = new_art.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Wege zum Erreichen:';

        var waysList = document.createElement('ul');
        new_art.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Vorteile:';
        
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        
        var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
        
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);
    });
}