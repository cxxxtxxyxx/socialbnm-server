import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _book from  "./book.js";
import _bookchat from  "./bookchat.js";
import _bookhashtag from  "./bookhashtag.js";
import _followbook from  "./followbook.js";
import _followuser from  "./followuser.js";
import _hashtag from  "./hashtag.js";
import _liked from  "./liked.js";
import _mark from  "./mark.js";
import _upfile from  "./upfile.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const book = _book.init(sequelize, DataTypes);
  const bookchat = _bookchat.init(sequelize, DataTypes);
  const bookhashtag = _bookhashtag.init(sequelize, DataTypes);
  const followbook = _followbook.init(sequelize, DataTypes);
  const followuser = _followuser.init(sequelize, DataTypes);
  const hashtag = _hashtag.init(sequelize, DataTypes);
  const liked = _liked.init(sequelize, DataTypes);
  const mark = _mark.init(sequelize, DataTypes);
  const upfile = _upfile.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  bookchat.belongsTo(book, { as: "book_book", foreignKey: "book"});
  book.hasMany(bookchat, { as: "bookchats", foreignKey: "book"});
  bookhashtag.belongsTo(book, { as: "book_book", foreignKey: "book"});
  book.hasMany(bookhashtag, { as: "bookhashtags", foreignKey: "book"});
  followbook.belongsTo(book, { as: "book_book", foreignKey: "book"});
  book.hasMany(followbook, { as: "followbooks", foreignKey: "book"});
  mark.belongsTo(book, { as: "book_book", foreignKey: "book"});
  book.hasMany(mark, { as: "marks", foreignKey: "book"});
  bookhashtag.belongsTo(hashtag, { as: "hashtag_hashtag", foreignKey: "hashtag"});
  hashtag.hasMany(bookhashtag, { as: "bookhashtags", foreignKey: "hashtag"});
  liked.belongsTo(mark, { as: "mark_mark", foreignKey: "mark"});
  mark.hasMany(liked, { as: "likeds", foreignKey: "mark"});
  bookchat.belongsTo(upfile, { as: "upfile_upfile", foreignKey: "upfile"});
  upfile.hasMany(bookchat, { as: "bookchats", foreignKey: "upfile"});
  book.belongsTo(user, { as: "user_user", foreignKey: "user"});
  user.hasMany(book, { as: "books", foreignKey: "user"});
  bookchat.belongsTo(user, { as: "sender_user", foreignKey: "sender"});
  user.hasMany(bookchat, { as: "bookchats", foreignKey: "sender"});
  followbook.belongsTo(user, { as: "user_user", foreignKey: "user"});
  user.hasMany(followbook, { as: "followbooks", foreignKey: "user"});
  followuser.belongsTo(user, { as: "sender_user", foreignKey: "sender"});
  user.hasMany(followuser, { as: "followusers", foreignKey: "sender"});
  followuser.belongsTo(user, { as: "receiver_user", foreignKey: "receiver"});
  user.hasMany(followuser, { as: "receiver_followusers", foreignKey: "receiver"});
  liked.belongsTo(user, { as: "user_user", foreignKey: "user"});
  user.hasMany(liked, { as: "likeds", foreignKey: "user"});

  return {
    book,
    bookchat,
    bookhashtag,
    followbook,
    followuser,
    hashtag,
    liked,
    mark,
    upfile,
    user,
  };
}
