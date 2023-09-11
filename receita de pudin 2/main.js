function showRecipe(id) {
    const recipes = document.querySelectorAll('.recipe');
    recipes.forEach(recipe => {
        recipe.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}