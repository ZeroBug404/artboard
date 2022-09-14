import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import React from "react";
import './Canvas.css';
import { fabric } from "fabric";

const Canvas = () => {
  const { editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };
  const onAddText = () => {
    editor.addText("Text");
  };

  const onAddBackground = (e) => {
    const image = e.target.files[0];
    fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
      editor.canvas.setBackgroundImage(img);
      editor.canvas.renderAll();
    });
  };

  const onUploadImage = (e) => {
    const image = e.target.files[0];
    fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
      editor.canvas.add(img);
      editor.canvas.renderAll();
    });
  };

  const removeObjectFromCanvas = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };

  const downloadImage = () => {
    const ext = "png";
    const base64 = editor.canvas.toDataURL({
      format: ext,
      enableRetinaScaling: true
    });
    const link = document.createElement("a");
    link.href = base64;
    link.download = `eraser_example.${ext}`;
    link.click();
  };

  const onAddArrow = () => {
    drawArrow(editor.canvas, 100, 100, 150, 150);
  };

  function drawArrow(canvas, fromx, fromy, tox, toy) {
    var angle = Math.atan2(toy - fromy, tox - fromx);

    var headlen = 5; // arrow head size

    // bring the line end back some to account for arrow head.
    tox = tox - headlen * Math.cos(angle);
    toy = toy - headlen * Math.sin(angle);

    // calculate the points.
    var points = [
      {
        x: fromx, // start point
        y: fromy
      },
      {
        x: fromx - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: fromy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle - Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle - Math.PI / 2)
      },
      {
        x: tox - headlen * Math.cos(angle - Math.PI / 2),
        y: toy - headlen * Math.sin(angle - Math.PI / 2)
      },
      {
        x: tox + headlen * Math.cos(angle), // tip
        y: toy + headlen * Math.sin(angle)
      },
      {
        x: tox - headlen * Math.cos(angle + Math.PI / 2),
        y: toy - headlen * Math.sin(angle + Math.PI / 2)
      },
      {
        x: tox - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: toy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
      },
      {
        x: fromx - (headlen / 4) * Math.cos(angle + Math.PI / 2),
        y: fromy - (headlen / 4) * Math.sin(angle + Math.PI / 2)
      },
      {
        x: fromx,
        y: fromy
      }
    ];

    var pline = new fabric.Polyline(points, {
      fill: "white",
      stroke: "black",
      opacity: 1,
      strokeWidth: 2,
      originX: "left",
      originY: "top",
      selectable: true
    });

    canvas.add(pline);

    canvas.renderAll();
  }

  return (
    <div className="canvas-body">
      <h1>Create your design</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <button onClick={onAddText}>Add Text</button>
      <button onClick={removeObjectFromCanvas}>Remove</button>
      <input type="file" onChange={onAddBackground} />
      <input type="file" multiple onChange={onUploadImage} />
      <button onClick={onAddArrow}>Add Arrow</button>
      <button onClick={downloadImage}>to Image</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
};

export default Canvas;
