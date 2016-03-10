describe('Unit: helloService', function() {

  beforeEach(module('app'));

  var helloService;
  beforeEach(inject(function(_helloService_) {
    helloService = _helloService_;
  }));

  it('can say hello', function() {
    spyOn(window, 'alert');
    helloService.sayHello();
    expect(window.alert).toHaveBeenCalledWith('hello');
  });
});
