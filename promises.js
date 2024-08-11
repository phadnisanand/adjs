// async and await
 
console.log('Before')
 
 
function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
 
            console.log('Reading a user from a database ----')
            resolve(
                [
                    {id:1,userName:'abhi'},
                    {id:2,userName:'anand'}
                ]
        )
        },2000)
    })
   
}


function getAddress(username, callBack){
    setTimeout(()=>{
        callBack(username);
    },2000)
   
}
function getDetailAddress(){
    return ["Rainbow Plaza, Shivar Chowk, Pimple Saudagar, Pune, MAH"]
  }


async function displayUser(){
    const user= await getUser(1) // waiting
    const address= await getAddress(user.name,getDetailAddress)  // waiting
    // const detailAddress= await getDetailAddress(address) // waiting
    console.log('user',user)
}
displayUser();