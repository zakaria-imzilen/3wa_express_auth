const { Router } = require("express");
const mainRoutes = Router();

let signedInUsers = [
	{
		id: 1,
		email: "tarik@gmail.com",
		pwd: "tarik_pwd",
		name: "Tarik",
	},
	{
		id: 2,
		email: "zakaria@gmail.com",
		pwd: "zakria_pwd",
		name: "Zakaria",
	},
];

mainRoutes.get("/", (req, res, next) => {
	res.render("login", { errMessage: null });
});

mainRoutes.post("/signin", (req, res, next) => {
	const findingUser = signedInUsers.find(
		(user) => user.email === req.body.email && user.pwd === req.body.pwd
	); // ELEMENT || undefined

	if (!findingUser) {
		res.render("login", {
			errMessage: "Wrong credentials",
		});
		return;
	} else {
		res.render("home", { name: findingUser.name });
	}
});

module.exports = { mainRoutes };
