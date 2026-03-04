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
        // loadCategoryNews(li.id = category.id)
        li.classList.add('hover:border-b-4', 'hover:border-b-red-700', 'text-xl', 'cursor-pointer')
        li.innerText = `${category.title}`
        categoryContainer.append(li)
        // short version
        // categoryContainer.innerHTML += `
        // <li id= ${category.id} class="hover:border-b-4 hover:border-b-red-700 text-xl">${category.title} </li>
        // `
    });

    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('li')
        // console.log(allLi);
        allLi.forEach(li => {
            li.classList.remove('border-b-4', 'border-b-red-700')
        })

        if (e.target.localName === 'li') {
            e.target.classList.add('border-b-4', 'border-b-red-700')
        }

    })
}

// const loadCategoryNews = (id) => {
//     console.log(id);

// }




loadCategory()