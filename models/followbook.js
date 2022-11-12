import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Followbook extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    book: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'book',
        key: 'id'
      }
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'followbook',
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
        name: "UK_user_book_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user" },
          { name: "book" },
        ]
      },
      {
        name: "FK_FOLLOWBOOK_BOOK_idx",
        using: "BTREE",
        fields: [
          { name: "book" },
        ]
      },
      {
        name: "FK_FOLLOWBOOK_USER_idx",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
    ]
  });
  }
}
