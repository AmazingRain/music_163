// 数字进行处理
export function getCount(count) {
  if (count < 0) {
    return;
  }
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万';
  } else {
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}

// 音乐的链接
export function getPlayMusicUrl(id) {
  // 120919402
  // https://music.163.com/song/media/outer/url?id=120919402.mp3
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 按照指定大小获取对应图片大小
export function getImageSize(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

export function formatHourMinute(time) {
  return formatDate(time, "hh:mm");
}

export function getRandomNumber(min = 0, max) {
  return Math.floor(Math.random() * (max - min) + min);
}