describe('MAPS', () => {

  it('has a set method', ()=>{

    // Create a new map called 'myMap'
    // add a new entry. Use "name" as the key and "Aaron" as the value
    let myMap = new Map();
    myMap.set("name", "Aaron")

    expect(myMap.get("name")).toBe("Aaron");

  });

  it('can use objects as a key', ()=>{
    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    // Create a map called 'myMap'
    // add a new entry. Use user as the key, and value as the value
    let myMap = new Map();
    myMap.set(user, value);
    

    expect(myMap.has(user)).toBe(true);
    expect(myMap.get(user)).toBe(value);
  });

});