import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class hashtag extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "tag_UNIQUE"
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'hashtag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tag_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tag" },
        ]
      },
    ]
  });
  }
}
