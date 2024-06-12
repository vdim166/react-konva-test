import { useContext } from "react"
import { ShapeTypes } from "../Types"
import { ShapeContext } from "../context/ShapeContext"

type ToolbarProps = {
  setIsDragging: (isDragging: boolean) => void
}

export const Toolbar = ({ setIsDragging }: ToolbarProps) => {
  const { isDragging, addShape, isCanvasDragging, setIsCanvasDragging } =
    useContext(ShapeContext)

  return (
    <>
      <div className=" bg-gray-600 flex p-2">
        <form className="mr-2">
          <select
            onChange={(e) => {
              if (e.target.value) addShape(e.target.value as ShapeTypes)
            }}
            defaultValue=""
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Выбрать фигуру</option>
            <option value="circle">Круг</option>
            <option value="rectangle">Квадрат</option>
            <option value="triangle">Треугольник</option>
          </select>
        </form>
        <button
          className={!isDragging ? "bg-red-600" : "bg-green-600"}
          onClick={() => {
            if (isCanvasDragging) {
              setIsCanvasDragging(false)
            }

            setIsDragging(!isDragging)
          }}
        >
          {isDragging ? "Отменить выделение" : "Выбрать курсор"}
        </button>

        <button
          onClick={() => {
            if (isDragging) {
              setIsDragging(false)
            }

            setIsCanvasDragging(!isCanvasDragging)
          }}
          className={`ml-3 ${
            !isCanvasDragging ? "bg-red-600" : "bg-green-600"
          }`}
        >
          Бесконечный холст
        </button>
      </div>
    </>
  )
}
