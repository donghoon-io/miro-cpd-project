var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

async function moderator(x, y) {
  const shape = await miro.board.createShape({
    shape: 'rectangle',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.ug2co4bl0tku">Moderator</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
  /*
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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
  */
}

async function strategy(x, y) {
  const shape = await miro.board.createShape({
    shape: 'round_rectangle',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.od8pcqdtkhl2">Strategy</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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

async function mechanism(x, y) {
  const shape = await miro.board.createShape({
    shape: 'rhombus',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.vqklszz7pj1i">Mechanism</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y+20, // Default value: center of the board
    width: 120,
    height: 120,
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y+20, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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

async function precondition(x, y) {
  const shape = await miro.board.createShape({
    shape: 'trapezoid',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.ld4fb457u03l">Precondition</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
/*
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y+3, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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
  */
}

async function barrier(x, y) {
  const shape = await miro.board.createShape({
    shape: 'pentagon',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.wf7exwrr03uh">Barrier</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x, // Default value: center of the board
    y: y+20, // Default value: center of the board
    width: 120,
    height: 120,
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y+18.5, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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

async function proximal_outcome(x, y) {
  const shape = await miro.board.createShape({
    shape: 'circle',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.zbc933au5vfi">Proximal outcome</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
    width: 120,
    height: 120,
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
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: 'transparent', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+200, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 10,
    height: 10,
  });

  const connector = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape.id,
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

async function distal_outcome(x, y) {
  const shape = await miro.board.createShape({
    shape: 'circle',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.o3ahs47uleu4">Distal outcome</a>',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
    width: 120,
    height: 120,
  });
}

async function flow(x, y, str, mid, out) {
  const shape_start = await miro.board.createShape({
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.od8pcqdtkhl2">Strategy</a><br><br>'+str,
    shape: 'round_rectangle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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

  const shape_mid = await miro.board.createShape({
    shape: 'rhombus',
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.o3ahs47uleu4">Mechanism</a><br><br>'+mid,
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
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
    width: 120,
    height: 120,
  });

  const shape_end = await miro.board.createShape({
    content: '<a href="https://docs.google.com/document/d/1GhgTo2pnpPTqXW9YbmSdKMT96rK6G7VpX8JmOq5Mod0/edit#bookmark=id.o3ahs47uleu4">Distal outcome</a><br><br>'+out,
    shape: 'circle',
    style: {
      color: '#000', // Default text color: '#1a1a1a' (black)
      fillColor: 'transparent', // Default shape fill color: transparent (no fill)
      fontFamily: 'arial', // Default font type for the text
      fontSize: 11, // Default font size for the text, in dp
      textAlign: 'center', // Default horizontal alignment for the text
      textAlignVertical: 'middle', // Default vertical alignment for the text
      borderStyle: 'normal', // Default border line style
      borderOpacity: 1.0, // Default border color opacity: no opacity
      borderColor: '#000', // Default border color: '#ffffff` (white)
      borderWidth: 1, // Default border width
      fillOpacity: 1.0, // Default fill color opacity: no opacity
    },
    x: x+300, // Default value: center of the board
    y: y, // Default value: center of the board
    width: 120,
    height: 120,
  });

  const connector_first = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape_start.id,
      position: {
        x: 1.0,
        y: 0.5,
      },
    },
    end: {
      item: shape_mid.id,
      position: {
        x: 0.0,
        y: 0.5,
      },
    },
  });

  const connector_second = await miro.board.createConnector({
    shape: 'elbowed',
    style: {
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
    },
    start: {
      item: shape_mid.id,
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
      endStrokeCap: 'rounded_stealth',
      strokeStyle: 'normal',
      strokeColor: '#000', // Magenta
      strokeWidth: 2,
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
      default:
        const strategy_val = document.getElementById("strategy").value;
        const mid_val = document.getElementById("midcontent").value; 
        const outcome_val = document.getElementById("outcome").value; 
        flow(x, y, strategy_val, mid_val, outcome_val);
        break;
    }
  });
}

drop();