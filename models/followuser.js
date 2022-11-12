import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Followuser extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sender: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    receiver: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'followuser',
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
        name: "UK_sender_receiver_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sender" },
          { name: "receiver" },
        ]
      },
      {
        name: "FK_FOLLOWUSER_USER_reciever_idx",
        using: "BTREE",
        fields: [
          { name: "receiver" },
        ]
      },
      {
        name: "FK_FOLLOWUSER_USER_sender_idx",
        using: "BTREE",
        fields: [
          { name: "sender" },
        ]
      },
    ]
  });
  }
}
