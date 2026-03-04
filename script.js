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
        const newTag = document.createElement('li')
        newTag.classList.add('hover:border-b-4', 'hover:border-b-red-700', 'text-xl', 'cursor-pointer')
        newTag.innerText = `${category.title}`
        categoryContainer.append(newTag)
    });

}

loadCategory()