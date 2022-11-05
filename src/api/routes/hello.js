// /api/:appid/:version/:schemas/:idcmd?searchStr=abc

export const hello = (req, res, next) => {
  res.send('Hello World!');
};

export const api = (req, res) => {
  const { appid, version, schemas, idcmd } = req.params;

  res.status(200).json({ appid, version, schemas, idcmd, query: req.query });
};
