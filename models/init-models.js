import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Book from  "./book.js";
import _Bookchat from  "./bookchat.js";
import _Bookhashtag from  "./bookhashtag.js";
import _Followbook from  "./followbook.js";
import _Followuser from  "./followuser.js";
import _Hashtag from  "./hashtag.js";
import _Liked from  "./liked.js";
import _Mark from  "./mark.js";
import _Upfile from  "./upfile.js";
import _User from  "./user.js";

export default function initModels(sequelize) {
  const Book = _Book.init(sequelize, DataTypes);
  const Bookchat = _Bookchat.init(sequelize, DataTypes);
  const Bookhashtag = _Bookhashtag.init(sequelize, DataTypes);
  const Followbook = _Followbook.init(sequelize, DataTypes);
  const Followuser = _Followuser.init(sequelize, DataTypes);
  const Hashtag = _Hashtag.init(sequelize, DataTypes);
  const Liked = _Liked.init(sequelize, DataTypes);
  const Mark = _Mark.init(sequelize, DataTypes);
  const Upfile = _Upfile.init(sequelize, DataTypes);
  const User = _User.init(sequelize, DataTypes);

  Bookchat.belongsTo(Book, { as: "book_book", foreignKey: "book"});
  Book.hasMany(Bookchat, { as: "bookchats", foreignKey: "book"});
  Bookhashtag.belongsTo(Book, { as: "book_book", foreignKey: "book"});
  Book.hasMany(Bookhashtag, { as: "bookhashtags", foreignKey: "book"});
  Followbook.belongsTo(Book, { as: "book_book", foreignKey: "book"});
  Book.hasMany(Followbook, { as: "followbooks", foreignKey: "book"});
  Mark.belongsTo(Book, { as: "book_book", foreignKey: "book"});
  Book.hasMany(Mark, { as: "marks", foreignKey: "book"});
  Bookhashtag.belongsTo(Hashtag, { as: "hashtag_hashtag", foreignKey: "hashtag"});
  Hashtag.hasMany(Bookhashtag, { as: "bookhashtags", foreignKey: "hashtag"});
  Liked.belongsTo(Mark, { as: "mark_mark", foreignKey: "mark"});
  Mark.hasMany(Liked, { as: "likeds", foreignKey: "mark"});
  Bookchat.belongsTo(Upfile, { as: "upfile_upfile", foreignKey: "upfile"});
  Upfile.hasMany(Bookchat, { as: "bookchats", foreignKey: "upfile"});
  Book.belongsTo(User, { as: "user_user", foreignKey: "user"});
  User.hasMany(Book, { as: "books", foreignKey: "user"});
  Bookchat.belongsTo(User, { as: "sender_user", foreignKey: "sender"});
  User.hasMany(Bookchat, { as: "bookchats", foreignKey: "sender"});
  Followbook.belongsTo(User, { as: "user_user", foreignKey: "user"});
  User.hasMany(Followbook, { as: "followbooks", foreignKey: "user"});
  Followuser.belongsTo(User, { as: "sender_user", foreignKey: "sender"});
  User.hasMany(Followuser, { as: "followusers", foreignKey: "sender"});
  Followuser.belongsTo(User, { as: "receiver_user", foreignKey: "receiver"});
  User.hasMany(Followuser, { as: "receiver_followusers", foreignKey: "receiver"});
  Liked.belongsTo(User, { as: "user_user", foreignKey: "user"});
  User.hasMany(Liked, { as: "likeds", foreignKey: "user"});

  return {
    Book,
    Bookchat,
    Bookhashtag,
    Followbook,
    Followuser,
    Hashtag,
    Liked,
    Mark,
    Upfile,
    User,
  };
}
