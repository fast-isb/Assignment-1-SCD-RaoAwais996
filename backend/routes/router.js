import express from 'express'; 
const router = express.Router();
const criminals = ("./models/Criminal.js");


router.post("/register",async(req,res)=>{
    const {name,inmateid,adress,age,mobile,datearrested,daterelease,previousconviction,crimedescription} = req.body;

    if(!name || !inmateid || !adress || !age || !mobile || !datearrested || !daterelease|| !previousconviction || !crimedescription){
        res.status(422).json("Complete the form to make a criminal record.");
    }

 
    try {
        const preuser = await criminals.findOne({inmateid:inmateid});
        console.log(preuser);

        if(preuser){
            res.status(422).json("This user already exsists");
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

export default router;