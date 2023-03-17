import connect from "../../../lib/mongodb"
import User from '../../../model/schema'

connect()

export default async function handler(req,res){

    try{
        const user = await User.findByIdAndDelete(req.query.id)
        if(!user){
            return res.json({"code" : "user not found"})
        }
        res.status(200).json({status:'User successfully deleted.'})
    }catch(error){
        res.status(400).json({status:'Not able to delete the user.'})
    }

}