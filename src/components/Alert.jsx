import { useEffect } from 'react';

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

  //если новое имя сбрасываем таймер
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
      // ф-я очистки передаем таймер айди
        return () => {  clearTimeout(timerId)  }
      }, [name]);

//появиться подсказка что было добавлено в корзину
    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export { Alert };