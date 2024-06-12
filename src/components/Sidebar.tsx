import { useContext } from "react"
import { ShapeContext } from "../context/ShapeContext"

export const Sidebar = () => {
  const { addShape } = useContext(ShapeContext)

  return (
    <div className="w-[80px] bg-gray-600 text-white p-2 flex flex-col items-center font-roboto rounded-r-[20px] absolute top-1/2 transform -translate-y-1/2">
      <h2 className="text-xl mb-4">Фигуры</h2>
      <button
        onClick={() => addShape("circle")}
        className="mb-2 p-2 bg-blue-500  w-[40px] h-[42px] z"
      >
        ○
      </button>
      <button
        onClick={() => addShape("rectangle")}
        className="mb-2 p-2 bg-green-500  w-[40px] h-[42px]"
      >
        ■
      </button>
      <button
        onClick={() => addShape("triangle")}
        className="mb-2 px-3
         py-2 bg-red-500"
      >
        ▲
      </button>
    </div>
  )
}
