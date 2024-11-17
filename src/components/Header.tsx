import PizzaImg from "../assets/images/pizza.svg"
import Cart from "../assets/images/Cart.svg"

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 mb-[40px] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={PizzaImg} alt="React Pizza Logo" className="cursor-pointer" width={38} height={38}/>
          <div>
            <h1 className="text-xl font-bold text-gray-900">React Pizza</h1>
            <p className="text-sm text-gray-600">самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <div className="flex items-center bg-[#FE5F1E] rounded-full hover:opacity-80 transition cursor-pointer">
          <button className="flex items-center text-white gap-[6px] px-4 py-2 ">
            520 <span>₽</span>
          </button>
          <span className="border-l-2 border-[#FFFFFF40] opacity-85 h-[22px]"></span>
          <button className="flex items-center  text-white gap-[8px] px-4 py-2 ">
            <img src={Cart} alt="Img" width={20} height={20}/>
            <span>3</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header