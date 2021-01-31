const parseExp = /\[(\d{2}):(\d{0,3})(\.\d{0,3})?\]/;

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split("\n");
  const lyrics = [];
  for (let line of lineStrings) {
    if (line) {
      const lrcContent = line.replace(parseExp, '').trim();
      const timeResult = parseExp.exec(line);
      let milliseconds = 0;

      // 部分数据可能为[03:12]
      if (timeResult[4]) {
        milliseconds = timeResult[4].length === 3 ? timeResult[4] * 1 : timeResult[4] * 10
      }
      // 部分数据可能为[02:452]
      timeResult[2] = timeResult[2].slice(0, 2);
      const lrcTime = timeResult[1] * 60 * 1000 + timeResult[2] * 1000 + milliseconds;
      lyrics.push({
        content: lrcContent,
        time: lrcTime
      })
    }
  }
  // 歌词可能不是按照时间顺序排的
  let sortArr = lyrics.sort((a, b) => a.time - b.time);
  return sortArr;
}