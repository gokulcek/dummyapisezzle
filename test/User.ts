const {expect}=require('chai');
import {RestUtil} from "../util/RestUtil"
let restUtil:RestUtil;


describe("validate user REST resource",async ()=>{
    before("Set up",async ()=>{
        restUtil =new RestUtil();
    })

   it("get users",async ()=>{
        let response=await restUtil.get('user');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
        expect(response.data.data[0]).to.include.all.keys('id','title','firstName','lastName','email','picture');
        
   })

   it("get specific user",async ()=>{
        let response=await restUtil.get('user/60d0fe4f5311236168a109ca');
        //validate response status
        await expect(response.status).to.equal(200);
        //validate response message
        await expect(response.statusText).to.equal('OK');


        //validate response tag
        await expect(response.data).to.include.all.keys('id','title','firstName','lastName','gender','email','dateOfBirth','phone','picture','registerDate','updatedAt');
        await expect(response.data.location).to.include.all.keys('street','city','state','country','timezone');

        //validate response value

        // expect(response.data.id).to.equal('60d0fe4f5311236168a109ca');
        await expect(response.data.title).to.equal('ms');
        await expect(response.data.firstName).to.equal('Sara');
        await expect(response.data.lastName).to.equal('Andersen');
        await expect(response.data.gender).to.equal('female');
        await expect(response.data.email).to.equal('sara.andersen@example.com');
        await expect(response.data.dateOfBirth).to.equal('1996-04-30T19:26:49.610Z');
        await expect(response.data.phone).to.equal('92694011');
        await expect(response.data.picture).to.equal('https://randomuser.me/api/portraits/women/58.jpg');

    
})


   
   
   
})

