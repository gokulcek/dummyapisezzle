const {expect}=require('chai');
import {RestUtil} from "../util/RestUtil"
let restUtil:RestUtil;


describe("validate comment REST resource",async ()=>{
    before("Set up",async ()=>{
        restUtil =new RestUtil();
    })

   it("get comment",async ()=>{
        let response=await restUtil.get('/post/60d21bf367d0d8992e610e88/comment');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
        expect(response.data.data[0]).to.include.all.keys('owner','id','message','publishDate');
        //validate response value
        await expect(response.data.data[0].id).to.equal('60d2230f67d0d8992e6117ba');
        await expect(response.data.data[0].message).to.equal('Breathtaking photo');
        
        
   })

   
})

