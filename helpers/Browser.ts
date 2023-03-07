export default class Browser {
  /**
   *  Is Safari
   */
  static isSafari(userAgent?: string, vendor?: string): boolean {
    return (
      /Safari/.test(userAgent || navigator.userAgent) &&
      /Apple Computer/.test(vendor || navigator.vendor)
    );
  }

  /**
   *  Is Mobile
   */
  static isMobile(userAgent?: string): boolean {
    const ua = userAgent || navigator.userAgent;
    return (
      ua.match(/Android/i) !== null ||
      ua.match(/webOS/i) !== null ||
      ua.match(/iPhone/i) !== null ||
      ua.match(/iPad/i) !== null ||
      ua.match(/iPod/i) !== null ||
      ua.match(/BlackBerry/i) !== null ||
      ua.match(/Windows Phone/i) !== null
    );
  }
}
