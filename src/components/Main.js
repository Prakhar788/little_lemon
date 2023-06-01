import React from 'react'
import Card from './Card'

const data = [
  {
      "img": "little-lemon/src/assets/icons_assets/greek salad.jpg",
      "name": "Greek Salad",
      "price":"$ 5.00",
      "description":"loremfdddddddddddddddddddffhgfhhhhhhhhhhhhhdddddddddddddddddddddddf",

  },
  {
    "img": "little-lemon/src/assets/icons_assets/greek salad.jpg",
    "name": "Greek Salad",
    "price":"$ 5.00",
    "description":"loremfddddddddddddddddddddddddddddddddddddddddddf",

},
 {
      "img": "little-lemon/src/assets/icons_assets/greek salad.jpg",
      "name": "Greek Salad",
      "price":"$ 5.00",
      "description":"loremfddddddddddddddddddddddddddddddddddddddddddf",

  }
  

]

const Main = () => {
  return (
    <>
    <div className='container heading'>
    <h1>This weeks specials!</h1>
      <button>Online Menu</button>
    </div>
    
    <div className='container main_section'>
     

      {data.map((curr)=>{
        return(
        <Card img={curr.img} name={curr.name} price={curr.price}
        description={curr.description}/>
      );
      })}
      
    </div>
    </>
  )
}

export default Main