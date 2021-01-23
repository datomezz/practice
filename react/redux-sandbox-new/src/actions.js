// ACTION CREATORS
const inc = () => ({type : "INC"});
const dec = () => ({type : "DEC"});
const rnd = () => {
  const payload = ~~(Math.random() * 10);
  return {
    type : "RND",
    payload
  }
}

export {inc, dec, rnd}