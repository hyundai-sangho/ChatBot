function getBotResponse(input) {
  if (input == '바위') {
    return '보'
  } else if (input == '보') {
    return '가위'
  } else if (input == '가위') {
    return '바위'
  }

  if (input == '안녕') {
    return '안녕 안녕'
  } else if (input == '잘 가') {
    return '너도 잘 가'
  } else {
    return '다른 것을 물어보십시오.'
  }
}
