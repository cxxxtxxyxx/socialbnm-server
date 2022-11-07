import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class upfile extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
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
    orgname: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "업로드시 파일명"
    },
    sysname: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    syspath: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "상대경로(서버위치부터)"
    },
    isdel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: "삭제 여부\n삭제된 파일 매일밤 스케줄러"
    }
  }, {
    sequelize,
    tableName: 'upfile',
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
    ]
  });
  }
}
