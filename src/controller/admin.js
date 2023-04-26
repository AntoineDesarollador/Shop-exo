
// fonction qui prend en paramètre les 2 paramètres 
// du cycle de communication client/serveur 

export const adminView = (req, res) => {

    // res -> retourne une reponse au client
    res
        .status(200) // -> la requête est réussie

        // methode render va renvoyer le HTML
    
        .render("layout", {
            template: "admin/index",
            component: res.locals.display,
        });
};