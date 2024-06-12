import { Rect } from "react-konva"
import { ShapeProps } from "../../Types"
import { useContext } from "react"
import { ShapeContext } from "../../context/ShapeContext"

export const RectShape = ({ shape, index }: ShapeProps) => {
  const { isDragging, handleDragEnd, handleDragStart } =
    useContext(ShapeContext)

  return (
    <Rect
      x={shape.x}
      y={shape.y}
      width={100}
      height={100}
      fill="red"
      stroke="black"
      strokeWidth={4}
      draggable={isDragging}
      onDragStart={() => handleDragStart(index)}
      onDragEnd={handleDragEnd}
    />
  )
}
