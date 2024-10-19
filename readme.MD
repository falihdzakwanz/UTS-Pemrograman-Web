# Welcome to Manchester United Fan Site repository!

This project is a fan site for Manchester United supporters. It provides information, news, and fan interaction features. The site is built using HTML, CSS, and Bootstrap for a responsive and modern design.

## Key Features

- **Responsive Design**: Utilizes Bootstrap for a responsive and visually appealing design.
- **Fan Interaction**: Includes sections for news, player highlights, upcoming matches, and fan polls.
- **Semantic Markup**: Uses microformats and schema.org for enhanced semantic structure and SEO.

## Technologies Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup language for creating the structure of the site.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling language to add aesthetics and layout.
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/): CSS framework for responsive design and pre-styled components.
- Microformats & [Schema.org](https://schema.org/): Enhances SEO and semantic structure.

## Getting Started

### Steps

1. **Clone the repository**:
```
git clone https://github.com/falihdzakwanz/UTS-Pemrograman-Web
```

2. **Open the Folder**
```
cd UTS-Pemrograman-Web
```

## Microformats & Schema.org

The project uses microformats and schema.org to enhance semantic structure and improve SEO. For example, news articles are marked up with https://schema.org/NewsArticle:

```html
<article 
    itemscope 
    itemtype="https://schema.org/NewsArticle" 
    class="card" 
    style="width: 18rem"
>
    <img 
        src="./assets/news_1.jpg" 
        class="card-img-top" 
        alt="news 1 picture" 
        itemprop="image"
    />
    <div class="card-body">
        <h5 
            class="card-title" 
            itemprop="headline"
        >
            Start Lambat, Manchester United Disarankan Pinjamkan Joshua Zirkzee
        </h5>
        <p 
            class="card-text" 
            itemprop="articleBody"
        >
            Mantan pemain West Ham Paolo Di Canio menilai striker baru Manchester United Joshua Zirkzee terlalu lambat untuk Premier League. Untuk itu, Di Canio menyarankan Setan Merah untuk meminjamkan sang pemain ke klub lain.
        </p>
        <a 
            href="https://www.bola.net/inggris/start-lambat-manchester-united-disarankan-pinjamkan-joshua-zirkzee-6a816b.html" 
            class="btn btn-primary" 
            itemprop="url"
        >
            Selengkapnya
        </a>
    </div>
</article>
```

## Note
This project is part of a submission for the midterm exam of the Website Programming course. Please do not reuse this project for your own submissions. It is intended for educational and open-source purposes only.
