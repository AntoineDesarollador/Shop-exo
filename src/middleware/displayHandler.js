// fonction middleWare qui est le lien entre la requête et la reponse 

export default (req, res, next) => {



    if (req.url === "/") {
        res.locals.display = "../admin/list";
    }
    if (req.url === "/product/add") {
        res.locals.display = "../admin/add_product";
    }
    next(); // -> permet au cycle continuer
};