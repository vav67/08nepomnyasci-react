import {useState, useEffect} from  'react'
import  {API_KEY, API_URL } from '../config'
import { Preloader } from  './Preloader'
  import {GoodList} from  './GoodList'
import {Cart } from  './Cart'
import { BasketList } from './BasketList';
import { Alert } from  './Alert'

function  Shop() {
// создадим два ключа
 // список торов и ф-я обновления, изнача пуст массив
  const [goods, setGoods] = useState([])
 //состояние загрузки
    const [loading, setLoading] = useState(true)
//добавим состояние- видим корзину или нет 08-007-02:05
 // isBasketShow-видим или нетб   setBasketSow-ф-я обновления
 const [isBasketShow, setBasketSow] = useState(false);

    const handleBasketShow = () => {
        setBasketSow(!isBasketShow);
    };
//Отображение
 const [alertName, setAlertName] = useState( '')

 const closeAlert = () => {
     setAlertName( '') //устанавливать пустую строку
 }

 // удаление из корзины
    const removeFromBasket = (itemId) => {
  const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder); //обновляет список заказов
    };
//корзина +- кол-во товара
    const incQuantity = (itemId) => {
    // обойдем текущ ордер
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
        return { ...el , quantity: newQuantity  }
            } else { return el; }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
   return {  ...el, quantity: newQuantity >= 0 ? newQuantity : 0 }
            }  else {   return el }
        });
        setOrder(newOrder);
    };

    // заказы
  const [order, setOrder ] = useState([])
// console.log( 'заказы', order )
// ф-я добавления заказа (принимает один эемент товара)
  const addToBasket = (item) => {
    // вначале проверка, а есть ли такой товар orderItem
    // -1 нету или число попорядку-есть
      const itemIndex = order.findIndex(
 (orderItem) => orderItem.id === item.id);
        if (itemIndex < 0) {
          //объект унаследует все ключи от нашего айтема, который
          // получем через ф-ю и добавим поле quantity
          const newItem = {...item, quantity: 1};
// и ко всему что есть,  добавляем новый товар в заказ
          setOrder([...order, newItem])
        } else {  // находим эл-т добавить один quantity
      //переберем массив
   const newOrder = order.map( (o, i) => {
            if (i === itemIndex) {
  return {...o, quantity: o.quantity + 1 } // изменяем только рдин ключ
            } else { return o }
          } )
//сформированный массив в наш стэйт в ордер те
// обновляет список заказов
          setOrder(newOrder);
        }
        // сообщение что добавлено
      setAlertName(item.name)

  } // конец добавления заказа


//получает некую ф-ию и некий массив зависимостей
//пустой массив - операция выполняется один раз
    useEffect( function  getGoods() {
      fetch(API_URL, {
            headers: {  'Authorization': API_KEY  }
      }).then((response) => response.json())
        .then((data) => {
        data.featured && setGoods(data.featured)
          setLoading(false)
          })
    }, [] )


    return (
        <main className="container content">
        <Cart quantity={order.length}  handleBasketShow={handleBasketShow} />
      {  loading ? ( <Preloader /> )  : (
    <GoodList goods={goods} addToBasket={addToBasket} />
          )}
    { isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow = {handleBasketShow}
          removeFromBasket = {removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}

            />
        ) }
            {
               alertName && <Alert name={alertName} closeAlert = {closeAlert} />
            }


       </main>
    )
}

export { Shop }