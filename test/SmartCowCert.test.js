const SmartCowCert = artifacts.require('./SmartCowCert.sol')

contract('SmartCowCert', (accounts) => {
    before(async () => {
        this.smartCowCert = await SmartCowCert.deployed()
      })

      it('deploys successfully', async () => {
        const address = await this.smartCowCert.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
      })

      it('lists tasks', async () => {
        const createCowCert = await this.smartCowCert.createCowCert()
        const task = await this.smartCowCert.createCowCert(createCowCert)
        assert.equal(task.createCowCert, 'CowCertificate')
      })
})
