var expect = require('chai').expect
  , identity = require('identity')
  , grep = require('./')
  
describe('grep', function() {

  it('should filter out values that do not match', function() {
    var o = { fn: identity }
      , all = grep(o, 'fn', /^(?!.*foo)/)
      , result

    expect(all('foo sth')).to.equal('foo sth')
    expect(all('bar sth')).to.equal('bar sth')
    expect(o.fn('foo sth')).to.equal(null)
    expect(o.fn('bar sth')).to.equal('bar sth')
  })

})