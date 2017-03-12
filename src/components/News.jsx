var React = require('react');
var ArticleItem = require('./ArticleItem.jsx');
var PhotoItem = require('./PhotoItem.jsx');

var news = [
    {
        'id' : 1,
        'title' : 'Ердоган назвав голландців "пережитками нацизму"',
        'subtitle' : 'Президент Туреччини Реджеп Таїп Ердоган назвав голландців "пережитками нацизму і фашизму" після того, як Нідерланди скасували дозвіл на посадку літака турецького міністра закордонних справ Мевлюта Чавушоглу.',
        'text_content' : "Пан Чавушоглу в суботу планував відвідати мітинг в Роттердамі, аби переконати турецьких громадян, що живуть в Нідерландах, підтримати зміни до конституції Туреччини на референдумі 16 квітня.",
        'thumbnails' : [
            'images/erdogan.jpg'
        ],
        'location' : 'erdogan',
        'author' : 'Lornot'
    },
    {
        'id' : 2,
        'title' : 'Японія вшанувала пам\'ять жертв цунамі 2011 року',
        'subtitle' : 'В Японії пройшли траурні заходи в пам\'ять про жертв землетрусу і цунамі 2011 року. На церемонії в Токіо були присутні прем\'єр-міністр Сіндзо Абе і принц Акисино.',
        'text_content' : "О 14:46 за місцевим часом була оголошена хвилина мовчання - саме в цей час шість років тому біля японського узбережжя стався найпотужніший в історії країни землетрус магнітудою 9,0.",
        'thumbnails' : [
            'images/japan.jpg'
        ],
        'location' : 'japan',
        'author' : 'Lornot'
    },
    {
        'id' : 3,
        'title' : 'Нова технологія Google прибере "капчі" із сайтів',
        'subtitle' : 'А ви, часом, не робот? Як часто ви стикаєтеся із подібними перевірками на сайтах? Нова ‎технологія Google дозволить прибрати "капчі" із веб-сторінок.‎',
        'text_content' : "‎'Капча' (англ. абревіатура 'captcha'), також відома, як тест Тюринга - це автоматизований ‎тест, який використовується для того, щоб визначити, хто користується системою - людина ‎чи комп'ютер.‎",
        'thumbnails' : [
            'images/google.jpg'
        ],
        'location' : 'google',
        'author' : 'Lornot'
    }
];

var photoesItems = [
    {
        'src': 'front/image',
        'alt':"Great View"
    },
    {
        'src': 'front/image',
        'alt':"Great View"
    }
];

var News = React.createClass({

    render: function () {

        var NewsList = news.map(
            function(article){
                return <ArticleItem id={article.id} title={article.title} subtitle={article.subtitle} text_content={article.text_content} thumbnails={article.thumbnails} location={article.location} author={article.author} />
            }
        );

        return (
            <div>{NewsList}</div>
        );
    }


});

module.exports = News;