import express from 'express'; 
const router = express.Router();
import criminals from '../models/Criminal.js';


router.post("/register",async(req,res)=>{
   const {name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription} = req.body;
    
        // const name= "Ali"
        // const inmateid= "002"
        // const adress= "m block"
        // const age= "32"
        // const mobile ="03183662053"
        // const datearrested= "18/02/2019"
        // const daterelease="18/02/2022"
        // const previousconviction= "0"
        // const crimedescription="gun shoot out & voilence"

    if(!name || !inmateid || !adress || !age || !mobile || !datearrested || !daterelease|| !previousconviction || !crimedescription){
        res.status(404).json("Complete the form to make a criminal record.");
    }

 
    try {
        const preuser = await criminals.findOne({inmateid:inmateid});
        console.log(preuser);
        if(preuser){
            res.status(405).json("This user already exsists");
        }else{
            const addcriminal = new criminals({
                name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription
            }); 
            console.log('test');

            await addcriminal.save();
            res.status(201).json(addcriminal);
            console.log(addcriminal);
       }

    } catch (error) {
        res.status(422).json(error);
    }
})



router.get("/getcriminaldata",async(req,res)=>{
    try {

        const criminaldata = await criminals.find();
        res.status(201).json(criminaldata)
        console.log(criminaldata);
    } catch (error) {
        res.status(404).json(error);
    }
})



router.get("/getindividualcriminal/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const individualcriminal = await criminals.findById({_id:id});
        console.log(individualcriminal);
        res.status(201).json(individualcriminal)
    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const updatedcriminall = await criminals.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updatedcriminall);
        res.status(201).json(updatedcriminall);
    } catch (error) {
        res.status(422).json(error);
    }
})

export default router;
