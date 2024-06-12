import { useContext } from "react"
import { ShapeContext } from "../../context/ShapeContext"
import { ShapeProps } from "../../Types"
import { RegularPolygon } from "react-konva"

export const TriangleShape = ({ shape, index }: ShapeProps) => {
  const { isDragging, handleDragEnd, handleDragStart } =
    useContext(ShapeContext)

  return (
    <RegularPolygon
      key={index}
      x={shape.x}
      y={shape.y}
      sides={3}
      radius={80}
      draggable={isDragging}
      fill="yellow"
      stroke="black"
      strokeWidth={4}
      onDragStart={() => handleDragStart(index)}
      onDragEnd={handleDragEnd}
    />
  )
}
