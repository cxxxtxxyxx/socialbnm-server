import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Bookchat extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    msg: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    isdel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    upfile: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'upfile',
        key: 'id'
      }
    },
    sender: {
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
    }
  }, {
    sequelize,
    tableName: 'bookchat',
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
        name: "FK_BOOKCHAT_USER_idx",
        using: "BTREE",
        fields: [
          { name: "sender" },
        ]
      },
      {
        name: "FK_BOOKCHAT_BOOK_idx",
        using: "BTREE",
        fields: [
          { name: "book" },
        ]
      },
      {
        name: "FK_BOOKCHAT_UPFILE_idx",
        using: "BTREE",
        fields: [
          { name: "upfile" },
        ]
      },
    ]
  });
  }
}
