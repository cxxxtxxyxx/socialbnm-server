import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Liked extends Model {
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
    mark: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'mark',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'liked',
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
        name: "UK_user_mark_idx",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user" },
          { name: "mark" },
        ]
      },
      {
        name: "FK_LIKED_USER_idx",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
      {
        name: "FK_LIKED_MARK_idx",
        using: "BTREE",
        fields: [
          { name: "mark" },
        ]
      },
    ]
  });
  }
}
