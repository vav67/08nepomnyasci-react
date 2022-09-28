import  {BasketItem} from  './BasketItem'

function BasketList(props) {
  //приходит список заказов
    const { order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity,
        decQuantity
    } =props
// общая сумма в корзине
 // когда получаем список заказов - пересчет
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

return (
    <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        { order.length ? (
            order.map((item) => (
                <BasketItem
                    key={item.id}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                    {...item}
                />
            ))
        ) : (
            <li className='collection-item'>Корзина пуста</li>
        )}

        <li  className="collection-item active">Всего:
            {totalPrice} грн.
         </li>
        <li className='collection-item'>
            <button className='btn btn-small'>Оформить</button>
        </li>


        <i  className='material-icons basket-close'
            onClick={handleBasketShow}
        > close </i>
    </ul>
    )
}


export {BasketList}