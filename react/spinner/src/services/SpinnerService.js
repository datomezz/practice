export default class SpinnerService {
  _url = "https://unico.local/wp-admin/admin-ajax.php?action=";

  getResources = async (args) => {
    const {nonce, user_id} = args;

    if(nonce) {
      const res = await fetch(`${this._url}spinner`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
        },
        credentials: 'same-origin',
        body : `user_id=${user_id}&nonce=${nonce}&req_type=load`
      });

      return await res.json();
    }
  }

  getNonce = async () => {
    const res = await fetch(`${this._url}getNonce`);
    return res.json();
  }

  getWinnerGiftId = async (args) => {
    const {nonce, user_id} = args;
    // MEMGONI SHECDOMAS MOGVCEMS IMITOM ROM NONCE MEORE REQUESTISTVIS GANAAXLEBS
    const res = await fetch(`${this._url}spinner`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
      },
      credentials: 'same-origin',
      body : `user_id=${user_id}&nonce=${nonce}&req_type=spin`
    });
    return await res.json();
  }
}