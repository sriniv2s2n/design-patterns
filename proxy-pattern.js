//Implement Object.seal() polyfill using Proxy Pattern
const seal = (obj) => {
  const handler = {
    get(target, prop) {
      if (target.hasOwnProperty(prop)) return target[prop];
      else return undefined;
    },
    set(target, prop, value) {
      if (target.hasOwnProperty(prop)) target[prop] = value;
      else return;
    },
    deleteProperty() {
      return;
    },
  };
  const sealProxy = new Proxy(obj, handler);

  return sealProxy;
};

let emp = {
  id: 120,
  name: 'ak',
};

let empSeal = seal(emp);
console.log(empSeal.name);
empSeal.name = 'pk';
console.log(empSeal.name);
empSeal.age = 100;
delete empSeal.id;
console.log(empSeal);
