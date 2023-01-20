const conectarBD = require('../db/condb.js')

exports.getAllEducacion = async(req, res ) =>{

    try {
        const [result] = await conectarBD.query("SELECT * FROM educacion ORDER BY createdAt ASC"
        );
        if (result.length === 0 )
        return res.status(404).json({ message: "No hay registros "})

        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

exports.getEducacion = async (req, res ) =>{
  try {
    const [result] = await conectarBD.query("SELECT * FROM educacion WHERE id = ?", [req.params.id]
    );
    if (result.length === 0){
        return res.status (404).json({message: "Id no encontrado en la base...."})
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.createEducacion = async (req, res ) => {
    try {
        const {id, codigo, nombre, universidad, horas, fecha_inicio, fecha_final} = req.body;
        const [result] = await conectarBD.query("INSERT INTO educacion (id, codigo, nombre, universidad, horas, fecha_inicio, fecha_final) VALUES (?,?,?,?,?,?,?)", 
        [id, codigo, nombre, universidad, horas, fecha_inicio, fecha_final ])
        res.json({
            id: result.insertId,
            codigo,
            nombre,
            universidad,
            horas,
            fecha_inicio,
            fecha_final
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.updateEducacion = async (req, res ) =>{
    try {
        const result = await conectarBD.query("UPDATE educacion SET ? WHERE id = ? ", [
            req.body,
            req.params.id,
        ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

exports.deleteEducacion = async (req, res ) =>{
    try {
        const [result] = await conectarBD.query("DELETE FROM educacion WHERE id = ?", [req.params.id]
    );
    if (result.affectedRows === 0 )
        return res.status(404).json({ message: "No se encontro el registro seleccionado "})
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

