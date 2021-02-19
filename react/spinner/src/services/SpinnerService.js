export default class SpinnerService {
  _data = {
    data : [
      {id:0,label:"product",title:"Samsung Galaxy A10s 2GB RAM 32GB LTE A107FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0105875_samsung-galaxy-a10s-2gb-ram-32gb-lte-a107fd-black_550-150x150.jpg",product_id:173,status:"NO PRICE"},
      {id:1,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:2,label:"product",title:"Samsung Galaxy A01 Core 1GB RAM 16GB LTE A013FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0122117_samsung-galaxy-a01-core-1gb-ram-16gb-lte-a013fd-black_550-150x150.jpg",product_id:161,status:3},
      {id:3,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:4,label:"product",title:"Apple MWTK2LL/A Macbook Air (TEST)",img:"https://unico.local/wp-content/uploads/2020/11/1-150x150.png",product_id:155,status:3},
      {id:5,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:6,label:"product",title:"HB კედლის ბანერი 34809-3",img:"https://unico.local/wp-content/uploads/2020/11/HB-150x150.jpg",product_id:142,status:3},
      {id:7,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:8,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"672",status:1},
      {id:9,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:10,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"671",status:1},
      {id:11,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:12,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"670",status:1},
      {id:13,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:14,label:"product",title:"Samsung Galaxy A10s 2GB RAM 32GB LTE A107FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0105875_samsung-galaxy-a10s-2gb-ram-32gb-lte-a107fd-black_550-150x150.jpg",product_id:173,status:"NO PRICE"},
      {id:15,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:16,label:"product",title:"Samsung Galaxy A01 Core 1GB RAM 16GB LTE A013FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0122117_samsung-galaxy-a01-core-1gb-ram-16gb-lte-a013fd-black_550-150x150.jpg",product_id:161,status:3},
      {id:17,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:18,label:"product",title:"Apple MWTK2LL/A Macbook Air (TEST)",img:"https://unico.local/wp-content/uploads/2020/11/1-150x150.png",product_id:155,status:3},
      {id:19,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:20,label:"product",title:"HB კედლის ბანერი 34809-3",img:"https://unico.local/wp-content/uploads/2020/11/HB-150x150.jpg",product_id:142,status:3},
      {id:21,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:22,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"672",status:1},
      {id:23,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:24,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"671",status:1},
      {id:25,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:26,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"670",status:1},
      {id:27,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:28,label:"product",title:"Samsung Galaxy A10s 2GB RAM 32GB LTE A107FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0105875_samsung-galaxy-a10s-2gb-ram-32gb-lte-a107fd-black_550-150x150.jpg",product_id:173,status:"NO PRICE"},
      {id:29,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:30,label:"product",title:"Samsung Galaxy A01 Core 1GB RAM 16GB LTE A013FD Black",img:"https://unico.local/wp-content/uploads/2020/11/0122117_samsung-galaxy-a01-core-1gb-ram-16gb-lte-a013fd-black_550-150x150.jpg",product_id:161,status:3},
      {id:31,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:32,label:"product",title:"Apple MWTK2LL/A Macbook Air (TEST)",img:"https://unico.local/wp-content/uploads/2020/11/1-150x150.png",product_id:155,status:3},
      {id:33,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:34,label:"product",title:"HB კედლის ბანერი 34809-3",img:"https://unico.local/wp-content/uploads/2020/11/HB-150x150.jpg",product_id:142,status:3},
      {id:35,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:36,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"672",status:1},
      {id:37,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:38,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"671",status:1},
      {id:39,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:40,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"670",status:1},
      {id:41,label:"empty",title:"Empty",img:"https://cdn3.vectorstock.com/i/1000x1000/90/92/empty-open-cardboard-box-vector-5099092.jpg",product_id:0,status:0},
      {id:42,label:"coupon",title:"Coupon",img:"https://cdn5.vectorstock.com/i/1000x1000/73/99/coupon-icons-discount-coupons-tickets-card-coupon-vector-25767399.jpg",product_id:"560",status:1}
    ],
    spinsCount : "3",
    lastSpinDay : "313"
  };

  _nonce = "123123123";
  
  getResources = (args) => {
    const {nonce} = args;
    console.log(nonce);
    if(nonce === "123123123") {
      return new Promise((resolve, reject) => {
        let timeout;
  
        if(timeout !== undefined) {
          clearInterval(timeout);
        }
  
        timeout = setTimeout(() => {
          if(Math.random() > .75) {
            reject(new Error("SPINNER AJAX ERROR"));
          }
          resolve(this._data);
        }, 500)
      });
    }

  }

  getNonce = () => {
    return new Promise((resolve) => {
      let timeout;

      if(timeout !== undefined) {
        clearInterval(timeout);
      }

      timeout = setTimeout(() => {
        resolve(this._nonce);
      }, 500);
    })
  }

  getWinnerGiftId = () => {
    const data = this._data.data;
    return new Promise((resolve) => {

      const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

      const randId = randInt(5, data.length);

      let timeout;
      console.log("RAND ID", randId);
      console.log("DAta Length", data.length);

      if(timeout !== undefined) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        resolve(randId)
      }, 1500);
    })
  }
}
