

class Http {
    static instance = new Http();

    get = async (url) =>{
        try{
            let req = await fetch (url);
            let json = await req.json();

            return json
        }
        catch(err) {
            console.log("http error Get Method", err);
            throw Error (err)
        }
    }
    post = async (url)=>{
        try{
            let req = await fetch(url,{
                method: "POST",
                body
            });
            let json = await req.json();

            return json
        }
        catch (err){
            console.log("http error Post Method", err);
            throw Error (err)
        }
    }
    delete = async (url)=>{
        try{
            let req = await fetch(url,{
                method:"DELETE",
                body
            });
            let json = await req.json();

            return json
        }
        catch(err){
            console.log("http error Delete Method", err);
            throw Error(err)
        }
    }
}

export default Http