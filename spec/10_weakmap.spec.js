describe('WEAKMAPS', () => {

  it('has a set method', ()=>{
    let key = {name: "Aaron"};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'};

    // Create a new WeakMap called 'myMap'
    // Add a new entry. Use key as the key and values as the value
    let myMap = new WeakMap();
    myMap.set(key, value);

    expect(myMap.has(key)).toBe(true);
    expect(myMap.get(key)).toEqual(value);

  });

  it('EXTRA CREDIT', () => {

    //If you make it this far, write a class with private member variables, using WeakMaps
    class MyClass {
      constructor(init) {
        this._wm = new WeakMap(init)
      }
      get(k) {
        return this._wm.get(k)
      }
      has(k) {
        return this._wm.has(k)
      }
      set(k, v) {
        this._wm.set(k, v)
        return this
      }
    }
  })

});