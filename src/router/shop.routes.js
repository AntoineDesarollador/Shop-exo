import { Router } from "express";
import { shopView, productView } from "../controller/shop.js";

//instanciation d'une nouvelle occurence de Router
const router = Router();


// on est ici sur une url:    /shop 

router.get("/", shopView);   

// on est ici sur une url:    /shop/product 

router.get("/product", productView);

export default router;