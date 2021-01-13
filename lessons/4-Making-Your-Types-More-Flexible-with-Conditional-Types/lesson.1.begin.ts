import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  TextMeta,
  ImageMeta
} from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,
  
  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width }
};

// these functions are called overload
// function setMeta(layer: ImageLayer, meta: ImageMeta): void;
// function setMeta(layer: TextLayer, meta: TextMeta): void;

function setMeta<T extends TextLayer | ImageLayer>(layer: T, meta: T extends TextLayer ? TextMeta : ImageMeta) {
  layer.meta = meta;
}

setMeta(textLayer, {
  fontFoundry: "test",
  licenseExpiration: new Date(),
});

setMeta(imageLayer, {
  origin: "Download",
  format: "jpg",
});

// function setMeta<T extends TextLayer | ImageLayer>(layer: T, meta: T extends TextLayer ? TextMeta : ImageMeta) {
//   layer.meta = meta;
// }
//
// setMeta(imageLayer, {
//   format: "jpg",
//   origin: "Download"
// });
//
// setMeta(textLayer, {
//   licenseExpiration: new Date(),
//   fontFoundry: "own foundary"
// })

// function setMeta<T extends TextLayer | ImageLayer>(layer: T, meta: T extends TextLayer ? TextMeta : ImageMeta) {
//   layer.meta = meta;
// }
//
// setMeta(textLayer, {
//   fontFoundry: "Own foundary",
//   licenseExpiration: new Date()
// });
//
// setMeta(imageLayer, {
//   origin: "Download",
//   format: "png"
// })

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize
};

render(project);
