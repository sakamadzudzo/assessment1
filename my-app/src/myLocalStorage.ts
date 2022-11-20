class MyLocalStorage {
  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string, expiry: number) {
    // if the expiry time is 0, it means there is no need to add the item
    if (expiry === 0) return;
    localStorage.setItem(key, value);
    const time = new Date().toDateString();
    localStorage.setItem('time', time);
    // let timer:Number;
    if (expiry) {
      let timer = setTimeout(() => {
        this.clear();
        timer && clearTimeout(timer);
      }, expiry);
    }
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
    window.location.href = '/login';
    // this.logoutService.sendLogoutEvent();
  }

  reApplyExpiryTimeout(expiry: number) {
    if (expiry) {
      let timer = setTimeout(() => {
        this.clear();
        window.location.href = '/';
        timer && clearTimeout(timer);
      }, expiry);
    }
  }

  calculateExpiryTimeout() {
    let logInTime = new Date(this.getItem('time')!);
      let currentTime = new Date();
      let timeDiff = currentTime.getTime() - logInTime.getTime();
      let expiry = Number(this.getItem('expiresIn')!) * 1000;
      if (timeDiff > expiry) {
        this.clear();
      } else {
        this.reApplyExpiryTimeout(expiry - timeDiff);
      }
  }
}

export default new MyLocalStorage();