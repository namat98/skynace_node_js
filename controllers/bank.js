const registerBank=async(req,res,next)=>{

    
    res.status(200)
    .json({
        success:true,
        data:{
            name:"Namatullah",
            age:23,
            class:4
        }
    })

}
module.exports={
    registerBank,
}