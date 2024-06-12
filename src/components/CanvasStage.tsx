import { Layer, Stage } from "react-konva"
import { RectShape } from "./shapes/RectShape"
import { useContext } from "react"
import { ShapeContext } from "../context/ShapeContext"
import { CircleShape } from "./shapes/CircleShape"
import { TriangleShape } from "./shapes/TriangleShape"

export const CanvasStage = () => {
  const { shapes, isCanvasDragging } = useContext(ShapeContext)

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={isCanvasDragging}
    >
      <Layer>
        {shapes.map((shape, index) => {
          switch (shape.type) {
            case "rectangle":
              return <RectShape shape={shape} key={index} index={index} />
            case "circle":
              return <CircleShape key={index} shape={shape} index={index} />
            case "triangle":
              return <TriangleShape key={index} shape={shape} index={index} />
            default:
              return null
          }
        })}
      </Layer>
    </Stage>
  )
}
