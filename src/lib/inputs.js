export class Select {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.values = [];
  }

  setItems(values) {
    this.values = values;
  }
}

export class Button {
  constructor() {}
  setAction(_action, _code) {}
}

export class TextField {
  constructor() {}
}
