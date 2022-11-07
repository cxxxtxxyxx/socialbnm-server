import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class mark extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    link: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ogtitle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ogdesc: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ogimg: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    isdel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    book: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'book',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mark',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_MARK_BOOK_idx",
        using: "BTREE",
        fields: [
          { name: "book" },
        ]
      },
    ]
  });
  }
}
