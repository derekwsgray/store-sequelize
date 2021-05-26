const DataTypes = require('sequelize').DataTypes;
const Default = require('./default');

module.exports = class extends Default {
    constructor (resourceName, joiSchema) {
        super(resourceName, joiSchema);

        for (let attributeName of Object.keys(joiSchema)) {
            const attribute = joiSchema[attributeName]
            if (attribute._type === 'number') {
                if (typeof attribute._flags.precision !== 'undefined') {
                    this[attributeName] = {
                        type: DataTypes.DECIMAL(28, attribute._flags.precision),
                        allowNull: true
                    }
                } else {
                    this[attributeName] = {
                        type: DataTypes.NUMERIC,
                        allowNull: true
                    }
                }
            }
        }
    }
}