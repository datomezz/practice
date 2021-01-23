const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function(strs) {
  let arr = strs;
  for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    console.log(arr[i]);
  }


  console.log(arr);
};

longestCommonPrefix(strs);