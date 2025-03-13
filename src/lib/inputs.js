// @ts-check

class FormWidget {
  /** @param {string} name */
  constructor(name) {
    this.name = name;
    /** @type {string} */
    this.value = undefined;
  }

  /**
   * @param {string} action
   * @param {string} code
   */
  setAction(action, code) {
    this.action = action;
    this.code = code;
  }
}

/** Class simulating a drop-down list. */
export class Select extends FormWidget {
  /** @param {string} name */
  constructor(name) {
    super(name);
    this.values = [];
  }

  setItems(values) {
    this.values = values;
  }
}

/** Class simulating a button. */
export class Button extends FormWidget {
  /** @param {string} name */
  constructor(name) {
    super(name);
  }
}

/** Class simulating a text field. */
export class TextField extends FormWidget {
  /** @param {string} name */
  constructor(name) {
    super(name);
  }
}
