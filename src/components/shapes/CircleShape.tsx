import { Circle } from "react-konva"
import { ShapeProps } from "../../Types"
import { useContext } from "react"
import { ShapeContext } from "../../context/ShapeContext"

export const CircleShape = ({ shape, index }: ShapeProps) => {
  const { isDragging, handleDragEnd, handleDragStart } =
    useContext(ShapeContext)
  return (
    <Circle
      x={shape.x}
      y={shape.y}
      radius={50}
      fill="blue"
      stroke="black"
      strokeWidth={4}
      draggable={isDragging}
      onDragStart={() => handleDragStart(index)}
      onDragEnd={handleDragEnd}
    />
  )
}
