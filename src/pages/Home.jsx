import React from "react"

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {Skeleton} from '../components/PizzaBlock/Skeleton';



export function Home() {
const [items, setItems] = React.useState([])
const [isLoading, setIsloading]= React.useState(true);

React.useEffect(() => {
fetch('https://650dbfb7a8b42265ec2ca851.mockapi.io/items')
.then((res)=>res.json())
.then((arr)=>{
  setItems(arr)
  setIsloading(false);
  })
},[])
console.log(items)
  return (

      <div class="container">
        <div class="content__top">
        <Categories/>
        <Sort/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          {
          isLoading? [...new Array(6)].map((_,index)=><Skeleton key={index}/>):items.map((obj)=><PizzaBlock key={obj.id}{...obj}/>)
          }
        </div>
      </div>
 
  );
}


export default Home;
