const loadCategory = async () => {
    try {
        const res = await fetch('https://news-api-fs.vercel.app/api/categories')
        const data = await res.json()
        const categories = data.categories;
        displayCategories(categories)
    } catch (error) {
        console.log(err);
    }
}

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(category => {
        const li = document.createElement('li')
        li.id = category.id
        li.classList.add('hover:border-b-4', 'hover:border-b-red-700', 'text-xl', 'cursor-pointer')
        li.innerText = `${category.title}`
        categoryContainer.append(li)
        // short version
        // categoryContainer.innerHTML += `
        // <li id= ${category.id} class="hover:border-b-4 hover:border-b-red-700 text-xl">${category.title} </li>
        // `
    });
    const mainList = document.getElementById('main')
    if (mainList) {
        mainList.classList.add('border-b-4', 'border-b-red-700')
    }
    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('li')
        // console.log(allLi);
        allLi.forEach(li => {
            li.classList.remove('border-b-4', 'border-b-red-700')
        })

        if (e.target.localName === 'li') {
            e.target.classList.add('border-b-4', 'border-b-red-700')
            loadCategoryNews(e.target.id)
        }

    })
}

const loadCategoryNews = async (id) => {
    try {
        const res = await fetch(`https://news-api-fs.vercel.app/api/categories/${id}`)
        const data = await res.json()
        displayCategoryData(data.articles);

    } catch (error) {
        console.log(error);
    }
}

const displayCategoryData = (news) => {
    const newsCardSection = document.getElementById('newsCardSection')
    newsCardSection.innerHTML = ''
    news.forEach(n => {
        console.log(n);

        const newDiv = document.createElement('div')
        newDiv.className = "flex flex-col justify-between"
        newDiv.innerHTML = `
                <img src=${n.image.srcset[2].url} class = "w-full h-auto" alt="">
              <a href=" ${n.link} " target=_blank class="hover:underline">  <h1 class="text-xl">${n.title}</h1></a>

              <div> 
              <p>Published at: ${n.time}
              <p>Published at: ${n.scrapedAt}
              </div>
                
        `
        newsCardSection.append(newDiv)
    })




}




loadCategory()
loadCategoryNews('main')