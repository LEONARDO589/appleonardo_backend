import { pool } from "../db/condb.js"

export const getAllEducacion = async (req, res ) =>{
    try {
        const [result] = await pool.query("SELECT * FROM educacion ORDER BY createdAt ASC"
        );

        if (result.length === 0 )
        return res.status(404).json({ message: "No hay registros "})

        res.json(result);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getEducacion = async (req, res ) =>{
  try {
    const [result] = await pool.query("SELECT * FROM educacion WHERE id = ?", [req.params.id]
    );
    if (result.length === 0){
        return res.status (404).json({message: "Id no encontrado en la base...."})
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

export const createEducacion = async (req, res ) => {
    try {
        const {codigo, nombre, universidad, horas, fecha_inicio, fecha_final} = req.body;
        const [result] = await pool.query("INSERT INTO educacion (codigo, nombre, universidad, horas, fecha_inicio, fecha_final) VALUES (?, ?, ?, ?, ?, ?)", 
        [codigo, nombre, universidad, horas, fecha_inicio, fecha_final ])
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

export const updateEducacion = async (req, res ) =>{
    try {
        const result = await pool.query("UPDATE educacion SET ? WHERE id = ? ", [
            req.body,
            req.params.id,
        ]);
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteEducacion = async (req, res ) =>{
    try {
        const [result] = await pool.query("DELETE FROM educacion WHERE id = ?", [req.params.id]
    );
    if (result.affectedRows === 0 )
        return res.status(404).json({ message: "No se encontro el registro seleccionado "})
    return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
