const Sequelize = require('sequelize');
const db = new Sequelize();

var Person = db.define('Person', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    address: sequelize.STRING
},
{
    getterMethods: {
        timeRemaining() {
            return (this.dataValues.due) ? this.dataValues.due - Date.now() : Infinity
        },

        overdue() {
            return (!this.dataValues.complete) && (this.timeRemaining < 0)
        }
    },
    
        hooks: {
            beforeDestroy: (instance, options, callback) => {

                return Task.destroy({
                    where: {
                        parentId: instance.dataValues.id,
                        id: {
                            $ne: instance.dataValues.id
                        }
                    },
                    individualHooks: false
                })
            }
        }

    }

)