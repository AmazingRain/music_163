export function handleMatchKeywords(str = '', keywords = []) {
  const reg = new RegExp(`(${keywords.join('|')})+`, 'g');
  return str.replace(reg, (match) => {
    return `<span class="match">${match}</span>`
  });
}