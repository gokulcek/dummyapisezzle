const {expect}=require('chai');
import {RestUtil} from "../util/RestUtil"
let restUtil:RestUtil;


describe("validate post REST resource",async ()=>{
    before("Set up",async ()=>{
        restUtil =new RestUtil();
    })

   it("Get posts list",async ()=>{
        let response=await restUtil.get('post');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
        expect(response.data.data[0]).to.include.all.keys('id','image','publishDate','text','tags','link','likes');
        expect(response.data.data[0].owner).to.include.all.keys('id','title','firstName','lastName','email','picture');
        
   })

   it("Get single post",async ()=>{
        let response=await restUtil.get('post/60d21b4667d0d8992e610c85');
        //validate response status
        await expect(response.status).to.equal(200);
        //validate response message
        await expect(response.statusText).to.equal('OK');


        //validate response tag
        await expect(response.data).to.include.all.keys('id','image','publishDate','text','tags','link','likes');
        await expect(response.data.owner).to.include.all.keys('id','title','firstName','lastName','email','picture');

        //validate response value
        await expect(response.data.id).to.equal('60d21b4667d0d8992e610c85');
        await expect(response.data.image).to.equal('https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg');
        await expect(response.data.publishDate).to.equal('2020-05-24T14:53:17.598Z');
        await expect(response.data.text).to.equal('adult Labrador retriever');
        await expect(response.data.link).to.equal('https://www.instagram.com/teddyosterblomphoto/');
        await expect(response.data.owner.picture).to.equal('https://randomuser.me/api/portraits/women/58.jpg');
        await expect(response.data.tags).to.include.members(["animal","dog","golden retriever"]);

    })



    it("Get posts list created by user",async ()=>{
        //perform get on user to get user id
        let response=await restUtil.get('user');
        let userId:string=response.data.data[0].id;
        response=await restUtil.get('/user/'+userId+'/post');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
        expect(response.data.data[0]).to.include.all.keys('id','image','publishDate','text','tags','link','likes');
        expect(response.data.data[0].owner).to.include.all.keys('id','title','firstName','lastName','email','picture');
    
    })
    it("Get posts list by tag title",async ()=>{
        //perform get on user to get user id
        let response=await restUtil.get('tag');
        let strTag:string=response.data.data[0];
        response=await restUtil.get('/tag/'+strTag+'/post');
        //validate response status
        expect(response.status).to.equal(200);
        //validate response message
        expect(response.statusText).to.equal('OK');
        //validate response tag
        expect(response.data.data[0]).to.include.all.keys('id','image','publishDate','text','tags','link','likes');
        expect(response.data.data[0].owner).to.include.all.keys('id','title','firstName','lastName','email','picture');
        
    })

    it("invalid post id",async ()=>{
        let response=await restUtil.get('post/60d0fe4f5311236168a109ca');
        //validate response status
        await expect(response.status).to.equal(404);
        //validate response message
        await expect(response.statusText).to.equal('Not Found');


    })



   
   
   
})

