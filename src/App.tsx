import { useState } from "react"
import { KonvaEventObject } from "konva/lib/Node"
import "./App.css"
import { Toolbar } from "./components/Toolbar"
import { ShapeType, ShapeTypes } from "./Types"
import { Sidebar } from "./components/Sidebar"
import { ShapeContext } from "./context/ShapeContext"
import { CanvasStage } from "./components/CanvasStage"

const App = () => {
  const [shapes, setShapes] = useState<ShapeType[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isCanvasDragging, setIsCanvasDragging] = useState(false)
  const [draggedShapeIndex, setDraggedShapeIndex] = useState<number | null>(
    null
  )

  const addShape = (shape: ShapeTypes) => {
    setShapes([...shapes, { type: shape, x: 100, y: 100 }])
  }

  const handleDragStart = (index: number) => {
    setDraggedShapeIndex(index)
  }

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    if (draggedShapeIndex !== null) {
      const newShapes = shapes.slice()
      newShapes[draggedShapeIndex] = {
        ...newShapes[draggedShapeIndex],
        x: e.target.x(),
        y: e.target.y(),
      }
      setShapes(newShapes)
      setDraggedShapeIndex(null)
    }
  }

  return (
    <div className="app">
      <ShapeContext.Provider
        value={{
          shapes,
          isDragging,
          handleDragStart,
          handleDragEnd,
          addShape,
          isCanvasDragging,
          setIsCanvasDragging,
        }}
      >
        <Toolbar setIsDragging={setIsDragging} />
        <CanvasStage />
        <Sidebar />
      </ShapeContext.Provider>
    </div>
  )
}

export default App
