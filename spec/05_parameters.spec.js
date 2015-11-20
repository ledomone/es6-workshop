describe('Default Values', () => {
  it('can be triggered when the incoming argument is undefined', () => {

    function test(name = "Mercury") {
      return name;
    }

    expect(test("Aaron"))   .toBe("Aaron");
    expect(test(undefined)) .toBe("Mercury");
    expect(test(null))      .toBe(null);
    expect(test())          .toBe("Mercury");
  });

  it('aren\'t included in arguments', () => {

    function test(name = "Mercury") {
      // console.log(arguments.length);
      return arguments.length;
      
    }

    expect(test("Aaron"))   .toBe(1);
    expect(test(null))      .toBe(1);
    expect(test())          .toBe(0);
  });

  it('can trigger a function call', () => {
    let triggerCount = 0;

    function test(name = getDefault()) {
      return name;
    }

    function getDefault() {
      triggerCount++;
      return 'Mercury';
    }

    expect(triggerCount)    .toBe(0);
    expect(test("Aaron"))   .toBe("Aaron");
    expect(test())          .toBe("Mercury");
    expect(test(null))      .toBe(null);
    expect(triggerCount)    .toBe(1);
  });

});

describe('Rest Parameters', () => {

  it('catch non-specified params', () => {

    function resty(first, second, ...others){
      return others;
    }

    expect(resty().length).toBe(0);
    expect(resty(1).length).toBe(0);
    expect(resty(1,2).length).toBe(0);
    expect(resty(1,2,3).length).toBe(1);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10).length).toBe(8);
  });

  it('has a different length than `arguments`', () => {

    function resty(first, second, ...others){
      return others.length == arguments.length;
    }

    expect(resty()).toBe(true);
    expect(resty(1)).toBe(false);
    expect(resty(1,2)).toBe(false);
    expect(resty(1,2,3)).toBe(false);
    expect(resty(1,2,3, undefined, 5, undefined, 7, undefined, 9, 10)).toBe(false);
  });

  it('is an actual array, unlike arguments', () => {

    function resty(...args){
      return args;
    }

    function argy(){
      return arguments;
    }

    var args = argy(1,2,3);
    var rests = resty(1,2,3);

    //
    expect(args.__proto__ == rests.__proto__) .toBe(false);
    expect(args.splice)                       .toBe(undefined);

    expect(rests.__proto__)                   .toEqual([]);
    expect(rests.splice)                      .toBeDefined();
    expect(rests.splice)                      .toEqual(Array.prototype.splice);
  });


  describe('EXTRA CREDIT', ()=>{

    /*
      EXTRA CREDIT
      Comment this back in, and see if you can get it to pass
    */

    it('it can default all arguments, optionally', () => {

      //Modify the method signature of `myFunction` to allow for all args to be optional

      function myFunction({name = "Irek", age = 29, favoriteBand = "Linkin Park"} = {}){
        expect(name).toBeDefined();
        expect(age).toBeDefined();
        expect(favoriteBand).toBeDefined();
      }

      myFunction({ name: 'Axel', age: 37, favoriteBand: 'Taylor Swift' });
      myFunction({ name: 'Axel', age: 37 });
      myFunction({ name: 'Axel' });
      myFunction({});
      myFunction();
    });
  })

});
