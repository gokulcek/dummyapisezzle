const axios=require('axios');
class RestUtil{
    public baseUrl:string;
    public options:object;
    
    constructor(){
        this.baseUrl='https://dummyapi.io/data/api/';
        this.options={
            headers:{'app-id': '<APP_ID>'}
        };
    }
    async get(resource:string,header?:object){
        console.log(this.baseUrl+resource)
        if(header==null){
            console.log("header null-->proceeding with default header");
        return await axios.get(this.baseUrl+resource,this.options).then((res:any)=>{
                return res;
            }).catch((err:any)=>{
                return err.response;
            })
        }
        else{
            console.log("header not null-->proceeding with header passed as argument");
            return await axios.get(this.baseUrl+resource,header)
        }
        
    }


}
export {RestUtil}
