import React from "react"


export function Categories () { 
  
  const [activeIndex, setActiveIndex] = React.useState(0)

  const categories =[ 'Все','Мясные','Вегетарианская','Гриль','Острые', 'Закрытые']



    
  const onClickCateries = (index) => {

  setActiveIndex (index) //задает активный индекс 

  }
  
  return( 
    /*//анонимная функц. вызывает функцию кторая передает индекс, и если этот индекс равен activeIndex, то применяется стиль active
     <div class="categories">
<ul>
  <li onClick={()=> onClickCateries(0)} className={activeIndex===0?'active':""}>Все</li>  
  <li onClick={()=> onClickCateries(1)} className={activeIndex===1?'active':""}>Мясные</li>
  <li onClick={()=> onClickCateries(2)} className={activeIndex===2?"active":""}>Вегетарианская</li>
  <li onClick={()=> onClickCateries(3)} className={activeIndex===3?"active":""}>Гриль</li>
  <li onClick={()=> onClickCateries(4)} className={activeIndex===4?"active":""}>Острые</li>
  <li onClick={()=> onClickCateries(5)} className={activeIndex===5?"active":""}>Закрытые</li>
</ul>
*/
<div class="categories">
<ul>
  {
 categories.map((value,i) =>(   
 
 <li key={i} onClick={()=> onClickCateries(i)} className={activeIndex===i?'active':""}>{value}</li> 

 ))}
</ul>

</div>
)} 

export default Categories