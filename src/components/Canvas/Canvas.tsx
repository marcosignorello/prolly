import React, {PropsWithChildren} from 'react'

const Canvas = ({name}: PropsWithChildren<{name: string}>) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = '48px serif'
      ctx.fillText(name, 10, 50)
    }
  }, [name])

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Canvas
