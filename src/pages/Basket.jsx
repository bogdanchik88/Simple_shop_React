import BasketCard from "../elements/BasketCard"
import useShopStore from "../store/shopStore"

const Basket = () => {
  const basket = useShopStore(state => state.basket)
  const totalPrice = useShopStore(state =>
    state.basket.reduce((sum, i) => {
      const price = i.item.hasDiscount ? i.item.discountPrice : i.item.price
      return sum + price * i.quantity
    }, 0)
  )

  return (
    <div className="flex flex-col gap-[16px] w-full max-w-[1110px] mx-auto px-[16px]">
      <p className="text-[21px] font-semibold text-[#838383] text-left">
        Корзина
      </p>

      <div className="flex flex-col items-start md:flex-row md:justify-between gap-[16px] w-full">
        {/* Список товаров */}
        <div className="flex flex-col gap-[16px] w-full md:max-w-[633px]">
          {basket.map(i => (
            <BasketCard key={i.item.id} {...i.item} quantity={i.quantity} />
          ))}
        </div>

        <div className="relative flex flex-col w-full max-w-[350px] bg-white p-[16px] rounded-[30px] shadow-md">
          {/* Итоговая сумма */}
          <div className="flex flex-row justify-between mb-[40px]">
            <p className="text-black font-semibold text-[15px]">ИТОГО</p>
            <p className="text-black font-semibold text-[15px]">{totalPrice} ₽</p>
          </div>

          {/* Кнопка подтверждения */}
          <button
            className="absolute -bottom-[15px] left-1/2 transform -translate-x-1/2 bg-black text-white font-semibold font-[15px] w-full rounded-[20px] py-[18px]"
            onClick={() => alert('Оплату попозже сделаем окда')}
          >
            Перейти к оформлению
          </button>
        </div>

      </div>
    </div>
  )
}

export default Basket
