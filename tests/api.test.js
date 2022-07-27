const request = require("supertest");
const {assert}=require("chai")
const server = require("../index");

describe("GET /iecho",()=>{
    it("GET /iecho?text=1234-- response with json containing 'text' property that contains a reverse string",async () => {
        const res= await request(server).get("/iecho?text=1234")
        assert.equal(res.status,200)
        assert.equal(res.body.text,"4321")
    })
    it("GET /iecho-- response with json containing 'error' property when there is no text query",async()=>{
        const res= await request(server).get("/iecho")
        assert.equal(res.status,400)
        assert.equal(res.body.error,"no text")
    })
    it("GET /iecho?text=reconocer-- the response returns true if the text is a palindrome",async()=>{
        const res=await request(server).get("/iecho?text=reconocer")
        assert.equal(res.status,200)
        assert.equal(res.body.palindrome,true)
    })
})

