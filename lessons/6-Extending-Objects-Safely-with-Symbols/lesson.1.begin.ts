import { TextLayer, LayerType, Position } from "./types";

function doLog(message: string, obj: any) {
  const objStr = obj.reallyUniqueLog ? obj.reallyUniqueLog(obj) : obj.toString();
  console.log(`${message} ${objStr}`);
}

function addLog<T>(obj: T, func: (obj: T) => string) {
  (obj as any).reallyUniqueLog = func;
}

const layer = {
  src: "dark.png",
  log: true
};

addLog(layer, (l) => `Am image layer with src ${l.src}`)

doLog("The first layer: ", layer);
