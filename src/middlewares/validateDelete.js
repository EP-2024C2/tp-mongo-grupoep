const validateDelete = (relatedSchema, foreignKey) => {
    return async (req, res, next) => {
        const id = req.params.id

        const relacionados = await relatedSchema.find({
            [foreignKey]: id
        });

        if (relacionados.length > 0) {
            return res.status(500).json({
                message: `No se puede borrar el elemento con ID: ${id} porque tiene elementos relacionados`
            });
        }
        next()
    }
}

module.exports = validateDelete