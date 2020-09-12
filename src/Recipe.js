import React from "react"
import style from "./recipe.module.css"

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul className={style.list}>
        {ingredients.map((elem, index) => (
          <li key={index}>{elem.text}</li>
        ))}
      </ul>
      <div>
        <p className={style.calory}>Calory: {Math.round(calories)}</p>
      </div>
      <div>
        <img className={style.image} src={image} alt="" />
      </div>
    </div>
  )
}
export default Recipe
