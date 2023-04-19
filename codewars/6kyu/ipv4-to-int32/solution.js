function ipToInt32(ip){
  let binary =  ip.split('.').map(i => {
    let a = (+i).toString(2);
    return '00000000'.substr(a.length) + a;
  });
  console.log(binary)
  return parseInt(binary.join(''), 2);
}

export default ipToInt32;