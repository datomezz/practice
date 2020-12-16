export const inc = () => ({type : "INC"});
export const dec = () => ({type : "DEC"});
export const rnd = () => {
  return {
    payload : Math.floor(Math.random() * 10),
    type : "RND"
  }
};