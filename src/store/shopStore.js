import { create } from "zustand";
import { persist } from "zustand/middleware";

const useShopStore = create(
  persist(
    (set, get) => ({
      items: [
        { id: 0, img: '/product_0.png', title: 'Apple BYZ S852I', price: 3527, hasDiscount: true, discountPrice: 2927, category: 'headphones', rating: 4.7 },
        { id: 1, img: '/product_1.png', title: 'Apple Earpods', price: 2327, hasDiscount: false, discountPrice: 1999, category: 'headphones', rating: 4.5 },
        { id: 2, img: '/product_2.png', title: 'Apple Earpods', price: 2327, hasDiscount: false, discountPrice: 2002, category: 'headphones', rating: 4.5 },
        { id: 3, img: '/product_0.png', title: 'Apple BYZ S852I', price: 2927, hasDiscount: false, discountPrice: 2306, category: 'headphones', rating: 4.7 },
        { id: 4, img: '/product_1.png', title: 'Apple Earpods', price: 2327, hasDiscount: false, discountPrice: 2077, category: 'headphones', rating: 4.5 },
        { id: 5, img: '/product_2.png', title: 'Apple Earpods', price: 2327, hasDiscount: false, discountPrice: 1945, category: 'headphones', rating: 4.5 },
        { id: 6, img: '/product_3.png', title: 'Apple AirPods', price: 9527, hasDiscount: false, discountPrice: 8321, category: 'wireless_headphones', rating: 4.7 },
        { id: 7, img: '/product_4.png', title: 'GERLAX GH-04', price: 6527, hasDiscount: false, discountPrice: 4675, category: 'wireless_headphones', rating: 4.7 },
        { id: 8, img: '/product_5.png', title: 'BOROFONE BO-4', price: 7527, hasDiscount: false, discountPrice: 3490, category: 'wireless_headphones', rating: 4.7 },
      ],
      basket: [
        { item: { id: 0, img: '/product_0.png', title: 'Apple BYZ S852I', price: 3527, hasDiscount: true, discountPrice: 2927, category: 'headphones', rating: 4.7 }, quantity: 1 }
      ],

      addToBasket: (itemId) => {
        set(state => {
          const basketCopy = [...state.basket]
          const existing = basketCopy.find(i => i.item.id === itemId)
          const product = state.items.find(i => i.id === itemId)

          if(existing) {
            existing.quantity += 1
          } else {
            basketCopy.push({item: product, quantity: 1})
          }

          return { basket: basketCopy }
        })
      },

      removeFromBasket: (itemId) => {
        set(state => {
          let basketCopy = [...state.basket]
          const existing = basketCopy.find(i => i.item.id === itemId)

          if (!existing) return state

          if (existing.quantity > 1) {
            existing.quantity -= 1
          } else {
            basketCopy = basketCopy.filter(i => i.item.id !== itemId)
          }

          return { basket: basketCopy }
        })
      },

      deleteFromBasket: (itemId) => {
        set(state => ({
          basket: state.basket.filter(i => i.item.id !== itemId)
        }))
      },
    }),
    {
      name: 'shop-data',        // имя ключа в sessionStorage
      getStorage: () => sessionStorage, // использование sessionStorage
    }
  )
)

export default useShopStore;
