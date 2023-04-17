function printerError(s) {
  console.log(s);
    const bad = s.match(/([n-z])/ig)
    const len = bad ? bad.length : 0;
    return `${len}/${s.length || 0}`;
}

export default printerError;