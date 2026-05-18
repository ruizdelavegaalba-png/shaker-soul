const requestURL = 'http://localhost:3000/items';

async function fetchCocktailsJson() {
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
}

fetchCocktailsJson().then(cocktails => {
    document.getElementById('cardGrid').classList.remove('d-none');
    for (let index = 0; index < cocktails.length; index++) {
        const cardGrid = document.getElementById('cardGrid');

        let title       = cocktails[index].title;
        let subtitle    = cocktails[index].subtitle;
        let year        = cocktails[index].year;
        let category    = cocktails[index].category;
        let description = cocktails[index].description;
        let image       = cocktails[index].image;
        let rating      = cocktails[index].rating;
        let origin      = cocktails[index].origin;
        let glass       = cocktails[index].glass;
        let strength    = cocktails[index].strength;

        cardGrid.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 card-col" data-category="${category}">
            <article class="cocktail-card card border-0 h-100">
                <div class="card-img-wrapper">
                    <img src="${image}" class="card-img-top" alt="${title} cocktail" loading="lazy">
                </div>
                <div class="card-body">
                    <span class="card-category-badge">${category}</span>
                    <h2 class="card-title">${title}</h2>
                    <p class="card-subtitle text-muted">${subtitle}</p>
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-meta">
                    <span class="meta-item">
                        <i class="bi bi-geo-alt"></i>
                        ${origin}
                    </span>
                    <span class="meta-item">
                        <i class="bi bi-cup-straw"></i>
                        ${glass}
                    </span>
                    <span class="strength-badge strength-${strength}">${strength}</span>
                </div>
                <div class="card-footer">
                    <span class="card-year">Since ${year}</span>
                    <div class="card-rating">
                        <i class="bi bi-star-fill"></i>
                        <span>${rating}</span>
                    </div>
                </div>
            </article>
        </div>
        `
    }

    initFilters();
})

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            let selectedCategory = btn.dataset.filter;
            const cardCols = document.querySelectorAll('.card-col');

            cardCols.forEach(col => {
                let matches = selectedCategory === 'all' || col.dataset.category === selectedCategory;
                col.classList.toggle('hidden', !matches);
            });
        });
    });
}