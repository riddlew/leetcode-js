const chain = (input, fs) => fs.reduce((prev, cur) => cur(prev), input);
export default chain;