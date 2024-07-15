import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
        <div className='image'></div>
        <div className='title'>Simple Omelette Recipe</div>
        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            Preparation time</p>
        <div className='PreparationTime'>
          <h4>Preparation Time</h4>
          <ul className='PreparationTime-ul'>
            <li>Total: Approximately 10 minutes</li>
            <li>Preparation: 5 minutes</li>
            <li>Cooking: 5 minutes</li>
          </ul>
        </div>
        <div className='Ingredients'>
          <h4>Ingredients</h4>
          <ul className='Ingredients-ul'>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs
                Instructions</li>
          </ul>
          <br/>
          <div className='Instructions'>
          <h4>Instructions</h4>
          <ul className='Instructions-ul'>
            <li> <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are
            well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li> <span>Heat the pan:</span>  Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li> <span>  Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.</li>
            <li> <span> Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly
            runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li> <span> Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it
            over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li> <span> Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
          </ul>
          <br/>
          <div className='Nutrition'>
          <h4>Nutrition</h4>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table>
            <tbody>
              <tr>
                <td>Calories </td>
                <td>277kcal</td>
              </tr>
              <tr>
                <td>Carbs </td>
                <td>Og</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
          </div>
          
        </div>
        
    </div>
    </div>
  )
}

export default Card