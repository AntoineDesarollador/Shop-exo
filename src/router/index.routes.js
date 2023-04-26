import { Router } from "express";

import { adminView } from "../controller/admin.js";
import displayHandler from "../middleware/displayHandler.js";


// intanciation d'une nouvelle occurence de Router
const router = Router();


// ici on est sur l'url:  /admin 

router.get("/", displayHandler, adminView);



// ici url /admion/product/add 

router.get("/product/add", displayHandler, adminView);

export default router;