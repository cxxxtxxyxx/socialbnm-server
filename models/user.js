import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nickname_UNIQUE"
    },
    profileimg: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ispublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "nickname_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
        ]
      },
    ]
  });
  }
}
