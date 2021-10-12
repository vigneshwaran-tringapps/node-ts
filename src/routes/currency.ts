
import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {

    try{
        return response.status(200).send(
            [
                {
                  "base":"INR",  
                  "rate": {
                      "USD": 0.0130,
                      "GBP": 0.0098,
                      "CAD": 0.017,
                      "EUR": 0.012,
                  } 
                },
                {
                    "base":"USD",  
                    "rate": {
                        "INR": 75.07,
                        "GBP": 0.74,
                        "CAD": 1.26,
                        "EUR": 0.87,
                    } 
                },
                {
                    "base":"GBP",  
                    "rate": {
                        "USD": 1.36,
                        "INR": 102.10,
                        "CAD": 1.71,
                        "EUR": 1.18,
                    } 
                },
                {
                    "base":"CAD",  
                    "rate": {
                        "USD": 0.80,
                        "GBP": 0.59,
                        "INR": 59.75,
                        "EUR": 0.69,
                    } 
                },
                {
                    "base":"EUR",  
                    "rate": {
                        "USD": 1.15,
                        "GBP": 0.85,
                        "CAD": 1.45,
                        "INR": 86.61,
                    } 
                }
            ]
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    }
   })
module.exports = router;