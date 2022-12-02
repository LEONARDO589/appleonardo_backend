import { pool } from "../db/condb.js"

export const getEstudios = async (req, res ) =>{
    try {
        const [result] = await pool.query("SELECT * FROM estudios ORDER BY createAt ASC"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getEstudio = async (req, res ) =>{
  try {
    const [result] = await pool.query("SELECT * FROM estudios WHERE id = ?", [req.params.id]
    );
    if (result.length === 0){
        return res.status (404).json({message: "Id no encontrado en la base...."})
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const createEstudios = async (req, res ) => {
    try {
        const {codigo, nombre} = req.body;
        const [result] = await pool.query("INSERT INTO estudios(codigo, nombre) VALUES (?, ?)", 
        [codigo, nombre ])
        res.json({
            id: result.insertId,
            codigo,
            nombre
        })
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updateEstudios = async (req, res ) =>{
    try {
        const result = await pool.query("UPDATE estudios SET ? WHERE id = ? ", [
            req.body,
            req.params.id,
        ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteEstudios = async (req, res ) =>{
    try {
        const [result] = await pool.query("DELETE FROM estudios WHERE id = ?", [req.params.id]
    );
    if (result.affectedRows === 0 )
        return res.status(404).json({ message: "No se encontro el registro seleccionado "})
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
