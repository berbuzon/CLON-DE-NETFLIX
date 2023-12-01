export class AppStorage {
  static async setItem(key, value) {

    // setItem almacenar datos en el localstorage.
    return await localStorage.setItem(key, JSON.stringify(value));
  }
  static async getItem(key) {
    // getItem obtener datos del localstorage.
    return JSON.parse(localStorage.getItem(key));
  }

  // removeItem eliminar datos del localstorage.
  static async removeItem(key) {
    return localStorage.removeItem(key);
  }
  // clear eliminar todos los datos del localstorage.
  static async clear() {
    return localStorage.clear();
  }
}
