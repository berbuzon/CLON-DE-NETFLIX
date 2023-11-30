export class AppStorage {
  static async setItem(key, value) {
    return await localStorage.setItem(key, JSON.stringify(value));
  }
  static async getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  static async removeItem(key) {
    return localStorage.removeItem(key);
  }
  static async clear() {
    return localStorage.clear();
  }
}
