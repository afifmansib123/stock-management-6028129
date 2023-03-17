import connect from "../../../lib/mongodb"
import User from '../../../model/schema'

connect()

export default async function handler(req,res){

    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        res.status(400).json({status:'Not able to retrieve users.'})
    }

}