// Excalidraw uses Map
// https://stackoverflow.com/a/56150320/5404186
const jsonMapReplacer = (_key, value) => {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()) // or with spread: value: [...value]
    };
  }
  return value;
};
const jsonMapReviver = (_key, value) => {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
};

export { jsonMapReviver as a, jsonMapReplacer as j };
