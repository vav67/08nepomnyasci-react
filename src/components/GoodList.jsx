import { GoodsItem } from  './GoodsItem'

function GoodList(props) {
  //массив всех товаров и по умолчанию как заглушка
    const {goods = [], addToBasket = Function.prototype } =props

   if (!goods.length) {
    return  (   <h3>Список пуст</h3>  )
   }

   // передадим дальше addToBasket
   return <div className="goods" >
       { goods.map((item) => (
      <GoodsItem key={item.id} {...item}  addToBasket={addToBasket}/>
           ) )}

   </div>
}

export {GoodList}