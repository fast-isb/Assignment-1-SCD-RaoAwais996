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
        // const crimedescription="gun voilence"

    if(!name || !inmateid || !adress || !age || !mobile || !datearrested || !daterelease|| !previousconviction || !crimedescription){
        res.status(422).json("Complete the form to make a criminal record.");
    }

 
    try {
        console.log('test 1');

        const preuser = await criminals.findOne({inmateid:inmateid});
        console.log(preuser);

        
        if(preuser){
            res.status(422).json("This user already exsists");
        }else{
            console.log('test 1');
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

export default router;