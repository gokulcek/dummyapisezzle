const {expect}=require('chai');
import {RestUtil} from "../util/RestUtil"
let restUtil:RestUtil;


describe("validate tag REST resource",async ()=>{
    before("Set up",async ()=>{
        restUtil =new RestUtil();
    })

   it("get tag list",async ()=>{
        let response=await restUtil.get('tag');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
       expect(response.data).to.include.all.keys('data','total','page');
       //validate response value
       await expect(response.data.data).to.include.members(["sand","summer","accessories","train station","carriage","water","pitbull","computer","dog","ground","jar","bulldog","france","tarmac","doctor","belgique","couch","pug","dogs","leaf"]);
        
   })

   


   
   
   
})

