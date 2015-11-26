describe('SETS', () => {

  it('has an add method and a has method', ()=>{

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set
    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(3);
    

    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(true);
    expect(mySet.has(3)).toBe(true);
    expect(mySet.has(4)).toBe(false);
  });


  it('doesn`t allow duplicates', ()=>{

    // Create a new Set called 'mySet'
    // add the number 1 to it three times
    let mySet = new Set();
    mySet.add(1);
    mySet.add(1);
    mySet.add(1);


    expect(mySet.has(1)).toBe(true);
    expect(mySet.has(2)).toBe(false);
    expect(mySet.has(3)).toBe(false);
    expect(mySet.has(4)).toBe(false);
  });

});