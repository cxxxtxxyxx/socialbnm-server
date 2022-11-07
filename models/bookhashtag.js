import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bookhashtag extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    createdat: {
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
    },
    hashtag: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'hashtag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookhashtag',
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
        name: "fk_BOOKHASHTAG_BOOK_idx",
        using: "BTREE",
        fields: [
          { name: "book" },
        ]
      },
      {
        name: "FK_BOOKHASHTAG_HASHTAG_idx",
        using: "BTREE",
        fields: [
          { name: "hashtag" },
        ]
      },
    ]
  });
  }
}
