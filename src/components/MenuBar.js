import React from 'react'

//these function props need to be in curly braces
const MenuBar = ({changeDetail, clicked}) => {

  /*
  The 'a' tags below are the menu items. 
  Think about the way a menu should work. 
  When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. 
  How could we achieve this programatically? 
  What other behavior do we expect when we click on a menu item? 
  Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */

  const handleClick = (event) => {
    changeDetail(event.target.id)
    //callback function that lives in parent, sending the clicked item with it
  }
   
  return (
    <div className="ui four item menu">

      <a 
        className={clicked === "profile" ? "item active" : "item"} 
        id="profile" 
        onClick={handleClick} >
        <i className="user large icon" id="profile" />
      </a>

      <a 
        className={clicked === "photo" ? "item active" : "item"} 
        id="photo" 
        onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a 
        className={clicked === "cocktail" ? "item active" : "item"} 
          id="cocktail" 
          onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a 
        className={clicked === "pokemon" ? "item active" : "item"} 
        id="pokemon" 
        onClick={handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
