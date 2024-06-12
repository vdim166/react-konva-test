import { KonvaEventObject } from "konva/lib/Node"
import { createContext } from "react"
import { ShapeType, ShapeTypes } from "../Types"

type ShapeContextType = {
  handleDragStart: (index: number) => void
  isDragging: boolean
  handleDragEnd: (e: KonvaEventObject<DragEvent>) => void
  shapes: ShapeType[]
  addShape: (shape: ShapeTypes) => void
  isCanvasDragging: boolean
  setIsCanvasDragging: (isDrag: boolean) => void
}

export const ShapeContext = createContext<ShapeContextType>({
  handleDragStart: () => {},
  isDragging: false,
  handleDragEnd: () => {},
  shapes: [],
  addShape: () => {},
  isCanvasDragging: false,
  setIsCanvasDragging: () => {},
})
