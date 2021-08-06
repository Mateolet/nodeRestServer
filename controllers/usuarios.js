
const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q,nombre = 'notName',apikey,page = 1, limit} = req.query;
    //por si no llega el nombre se mandan not Name.
    res.json({
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit

    })
}


const usuariosPost = (req, res = response) => {

    const {nombre,edad,id} = req.body;

    res.json({
        msg:'post API - Controlador',
        nombre,
        id,
        edad
    

    })
}

const usuariosPut = (req, res = response) => {

    //request por q se esta solicitando
    const {id} = req.params

        res.status(500).json({
            msg:'put API - Controlador',
            id
            
        })

}



const usuariosDelete = (req, res = response) => {

    
    res.json({
        msg:'delete API - Controlador'
    })
}



const usuariosPatch = (req, res = response) => {

    
    res.json({
        msg:'patch API - Controlador'
    })
}


module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}