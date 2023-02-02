function moderator(x, y) {
  const description = miro.board.createText({
    content: '<p>A factor that strengthens or weakens the relationship between the strategy and mechanism</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-85,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.ug2co4bl0tku">Moderator</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'rectangle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 150,
    height: 75,
  });
}

function strategy(x, y) {
  const description = miro.board.createText({
    content: '<p>A specific and operationally defined implementation strategy</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-85,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.od8pcqdtkhl2">Implementation strategy</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'round_rectangle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 150,
    height: 75,
  });
}

function mechanism(x, y) {
  const description = miro.board.createText({
    content: '<p>How or why the strategy works to resolve the barrier</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-90,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.vqklszz7pj1i">Mechanism</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-60,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'rhombus',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 100,
    height: 100,
  });
}

function precondition(x, y) {
  const description = miro.board.createText({
    content: '<p>A factor that is necessary for the mechanism to be activated and subsequent causal events to occur</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.ld4fb457u03l">Precondition</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-55,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'trapezoid',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 150,
    height: 75,
  });
}

function barrier(x, y) {
  const description = miro.board.createText({
    content: '<p>The problem that a strategy is intended to resolve</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-90,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.wf7exwrr03uh">Barrier</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-60,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'pentagon',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 100,
    height: 100,
  });
}

function proximal_outcome(x, y) {
  const description = miro.board.createText({
    content: '<p>The earliest signs of change in the mechanism, barrier, or precursors to the distal outcome</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.zbc933au5vfi">Proximal outcome</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-65,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 100,
    height: 100,
  });
}

function distal_outcome(x, y) {
  const description = miro.board.createText({
    content: '<p>The desired implementation outcome</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text = miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.o3ahs47uleu4">Distal implementation outcome</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-70,
    width: 200,
  });

  const shape = miro.board.createShape({
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 100,
    height: 100,
  });
}

async function flow(x, y, str, out) {
  const description_start = await miro.board.createText({
    content: '<p>A specific and operationally defined implementation strategy</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x-300,
    y: y-85,
    width: 200,
  });

  const text_start = await miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.od8pcqdtkhl2">Implementation strategy</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x-300,
    y: y-55,
    width: 200,
  });

  const shape_start = await miro.board.createShape({
    content: str,
    shape: 'round_rectangle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x-300, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 150,
    height: 75,
  });


  const description_end = await miro.board.createText({
    content: '<p>The desired implementation outcome</p>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-100,
    width: 200,
  });

  const text_end = await miro.board.createText({
    content: '<b><a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.o3ahs47uleu4">Distal implementation outcome</a></b>',
    style: {
      color: '#000', // Default value: #1a1a1a (black)
      fillColor: 'transparent', // Default value: transparent (no fill)
      fillOpacity: 1, // Default value: 1 (solid color)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 14, // Default font size
      textAlign: 'center', // Default alignment: left
    },
    x: x,
    y: y-70,
    width: 200,
  });

  const shape_end = await miro.board.createShape({
    content: out,
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 100,
    height: 100,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 1,
    },
    start: {
      item: shape_start.id,
      position: {
        x: 1.0,
        y: 0.5,
      },
    },
    end: {
      item: shape_end.id,
      position: {
        x: 0.0,
        y: 0.5,
      },
    },
  });
}
  async function arrow(x, y) {
    const shape_start = await miro.board.createShape({
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 0.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 0.0, // Default fill color opacity: no opacity
    },
    x: x-150, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 8,
    height: 8,
  });

  const shape_end = await miro.board.createShape({
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 12, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 0.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 0.0, // Default fill color opacity: no opacity
    },
    x: x+150, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 8,
    height: 8,
  });
  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 1,
    },
    start: {
      item: shape_start.id,
      position: {
        x: 1.0,
        y: 0.5,
      },
    },
    end: {
      item: shape_end.id,
      position: {
        x: 0.0,
        y: 0.5,
      },
    },
  });
}

async function drop() {
  await miro.board.ui.on('drop', async ({x, y, target}) => {
    switch(target.id) {
      case "1":
        moderator(x, y);
        break;
      case "2":
        strategy(x, y);
        break;
      case "3":
        precondition(x, y);
        break;
      case "4":
        mechanism(x, y);
        break;
      case "5":
        barrier(x, y);
        break;
      case "6":
        proximal_outcome(x, y);
        break;
      case "7":
        distal_outcome(x, y);
        break;
      case "8":
        arrow(x, y);
        break;
      default:
        const strategy_val = document.getElementById("strategy").value;
        const outcome_val = document.getElementById("outcome").value; 
        flow(x+150, y, strategy_val, outcome_val);
        break;
    }
  });
}

drop();