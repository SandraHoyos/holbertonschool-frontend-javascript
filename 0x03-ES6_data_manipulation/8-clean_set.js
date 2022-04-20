export default function cleanSet(set, startString) {
  if (!startString || !startString.length) { 
      return ''; }
  let resultado = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) { resultado += `${element.slice(startString.length)}-`; }
  });

  return resultado.slice(0, resultado.length - 1);
}
