export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (!(val instanceof Number)) {
      throw new TypeError(`${val} must be number`);
    }
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if (this._sqft) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
