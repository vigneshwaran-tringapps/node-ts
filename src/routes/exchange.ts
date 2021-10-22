
import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {

    try{
        return response.status(200).send(
            [
                {
                  "base":"INR",  
                  "rate": {
                      "CAD": 0.017,
                      "EUR": 0.012,
                      "GBP": 0.0098,
                      "INR": 1,
                      "USD": 0.0130
                    },
                "symbols": {
                       "CAD": "Canadian dollar",
                       "USD":"United states dollar",
                       "GBP":"great britan pound",
                       "INR":"Indian rupees",
                       "EUR":"Euro"
                    }
                },
                {
                    "base":"USD",  
                    "rate": {
                        "INR": 75.07,
                        "GBP": 0.74,
                        "CAD": 1.26,
                        "EUR": 0.87,
                    },
                    "symbols": {
                        "CAD": "Canadian dollar",
                        "USD":"United states dollar",
                        "GBP":"great britan pound",
                        "INR":"Indian rupees",
                        "EUR":"Euro"
                     } 
                },
                {
                    "base":"GBP",  
                    "rate": {
                        "USD": 1.36,
                        "INR": 102.10,
                        "CAD": 1.71,
                        "EUR": 1.18,
                    },
                    "symbols": {
                        "CAD": "Canadian dollar",
                        "USD":"United states dollar",
                        "GBP":"great britan pound",
                        "INR":"Indian rupees",
                        "EUR":"Euro"
                     } 
                },
                {
                    "base":"CAD",  
                    "rate": {
                        "USD": 0.80,
                        "GBP": 0.59,
                        "INR": 59.75,
                        "EUR": 0.69,
                    } ,
                    "symbols": {
                        "CAD": "Canadian dollar",
                        "USD":"United states dollar",
                        "GBP":"great britan pound",
                        "INR":"Indian rupees",
                        "EUR":"Euro"
                     }
                },
                {
                    "base":"EUR",  
                    "rate": {
                        "USD": 1.15,
                        "GBP": 0.85,
                        "CAD": 1.45,
                        "INR": 86.61,
                    } ,
                    "symbols": {
                        "CAD": "Canadian dollar",
                        "USD":"United states dollar",
                        "GBP":"great britan pound",
                        "INR":"Indian rupees",
                        "EUR":"Euro"
                     }
                }
            ]
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    }
   })
module.exports = router;