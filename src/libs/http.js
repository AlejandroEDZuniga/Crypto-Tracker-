//Adapter, patron de diseño


class Http {
    static instance = new Http();

    get = async (url) => {

        try {

            let req = await fetch(url);
            let json = await req.json()

            return json

        } catch (err){

            console.log("http get errorMethod", err)

            throw Error(err)
        }
    }

    post = async (url, body) =>{
        try {
            let req = await fetch(url, {
                method : "POST",
                body //No se coloca body:body debido a que esta implicito por ecma6
            });
            let json = await req.json()
            return json
        } catch (err){
            console.log("http Post errorMethod", err)

            throw Error(err)
        }

    }

    delete = async (url, body) =>{
        try{
            let req = await fetch(url,{
                method:"DELETE",
                body
            });
            let json = await req.json()
            return json
        }catch (err){
            console.log("http Delete errorMethod", err)
            throw Error(err)
        }
    }


}

export default Http