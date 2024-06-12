export type ShapeTypes = "rectangle" | "circle" | "triangle"
export type ShapeType = { type: ShapeTypes; x: number; y: number }

export type ShapeProps = {
  shape: ShapeType
  index: number
}
