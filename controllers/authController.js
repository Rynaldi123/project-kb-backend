const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "12345") {
    const token = jwt.sign(
      {
        username: username,
      },
      "SECRET_KEY_KB",
      {
        expiresIn: "1h",
      },
    );

    return res.json({
      token,
    });
  }

  return res.status(401).json({
    message: "Username atau password salah",
  });
};
