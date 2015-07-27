var expect = require('chai').expect
  , identity = require('utilise.identity')
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

  it('should skip non-string arguments', function() {
    var o = { fn: identity }
      , all = grep(o, 'fn', /^(?!.*foo)/)
      , result

    expect(all('foo sth', Object.create(null))).to.equal('foo sth')
    expect(all('bar sth', Object.create(null))).to.equal('bar sth')
    expect(o.fn('foo sth', Object.create(null))).to.equal(null)
    expect(o.fn('bar sth', Object.create(null))).to.equal('bar sth')
  })

})