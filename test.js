import { decodeToken } from 'totaldocs-login'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6InVzZXIiLCJleHAiOjQ3NjI4OTcwMDAsImlhdCI6MTYyODk3MDAwMH0.' +
  'TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'

console.log(decodeToken(token))
