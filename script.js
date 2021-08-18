const searchBtn = document.getElementById('search-btn');
const mealList =  document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener("click, getMealRecipe");

function getMealList(){
  let searchInputTxt= document.getElementById
  ('search-input').value.trim();
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
  .then(response => response.json())
  .then(data => {
      let html ="";
      if(data.meals){
        data.meals.forEach(meal =>{
          html +=`
           <div class="meal-item"> data-id = "${meal.idMeal}"
           </div>
           <div class="meal-img">
             <img class="Alfredo" src="$meal.strMealThumb" alt="food">
          </div>
          <div class="meal-name">
            <h3>${meal.strMeal}</h3>
            <a href="#"class="recipe-btn">Get Recipe</a>
         </div>
         <div>
          `;
        });
        mealList.classlist.remove('notFound');
      } else
           html = "Sorry, we didn't find any meal"
      }
      mealList.innerHTML = html;
  })


  console.log(searchInputTxt);

}

function getMealRecipe(e){
  e.preventDefault();
  if(e.target.classList.contains('recipe-btn')){
    let mealItem = e.target.parentElement.parentElement;
     fetch(`www.themealdb.com/api/json/v1/1/lookup.php?=${mealItem.dataset.id}`);
     .then(response => response.json())
     .then(data => mealRecipeModal(data.meals));

     })

  }
}

function mealRecipeModal(meal){
  console.log(meal);
  meal = meal[0];
  let html =  <h2 class="recipe-title">{$meal.str}</h2>
   <p class="recipe-category">${meal.strCategory}</p>
   <div class="recipe-instructions">
     <h3>Ingredients:</h3>
     <p>{meal.strInstructions}</p>

     <h3>Instructions:</h3>
     <p>Cook the pasta, drain, and reserve cooking water. Bring a large pot of salted water to a boil. Add the fettuccine and cook until al dente, 8 to 10 minutes. Reserve 1/2 cup of the pasta cooking water, then drain the pasta.

Dry the chicken and season with salt and pepper. Meanwhile, pat both sides of the chicken breasts dry with paper towels. Season with 3/4 teaspoon of the salt and 1/4 teaspoon of the pepper.

Heat the oil over medium-high in a large frying pan. Heat the oil in a large frying pan over medium-high heat until shimmering, 2 to 3 minutes. If you have a pan that has straight sides, here's the time to use it. Do not use a nonstick pan.

Add the chicken to the hot pan, and cook for 5 to 7 minutes. Swirl the pan just before adding the chicken to distribute the oil. Add the chicken and leave it alone for 5 to 7 minutes, until the bottom is golden-brown. If you try to to turn the chicken and it feels stuck, it isn't ready to flip.

Flip the chicken and cook for another 5 to 7 minutes, until the chicken reaches 165°F.Flip the chicken over and add 1 tablespoon of the butter right between them. Pick up the pan and give it a gentle swirl to distribute the melting butter. Cook the chicken until it reaches an internal temperature of 165°F, 5 to 7 minutes more.

Slice the chicken and cover to keep warm. Transfer the chicken to a plate or clean cutting board and let rest for 3 minutes. Cut into 1/2-inch-thick slices. Cover with aluminum foil while you prepare the rest of the dish.

Melt the rest of the butter and sauté the garlic. Add the remaining 7 tablespoons of butter to the same pan used for the chicken and place over medium heat until melted. Add the garlic and sauté until fragrant, 30 seconds to 1 minute.

Make the Alfredo sauce. Whisk in the cream, Parmesan, nutmeg, remaining 1/4 teaspoon salt, and remaining 1/4 teaspoon pepper. Simmer for 3 to 4 minutes. If the sauce is too thick, add some of the reserved pasta cooking water, a few tablespoons at a time, to thin it out.

Add the drained pasta and toss to coat in the sauce. Add the drained fettuccine to the sauce and toss to coat. Divide the pasta among serving bowls and top with a few slices of chicken. Garnish with parsley, more Parmesan, and black pepper if desired.

</p> 


</div>`
  `;
  mealDetailsContent.innerHTML = ;
  mealDetailsContent.parentElement.classList.add
  ('showRecipe');
})
