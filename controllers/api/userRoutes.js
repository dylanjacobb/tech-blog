const router = require('express').Router();
const { User } = require('../../models');

// referenced from group project
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const newUser = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!newUser) {
      res
        .status(400)
        .json({ message: 'Incorrect email/password, please try again' });
      return;
    }

    const validPassword = await newUser.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email/password, please try again' });
      return;
    }

    const validEmail = await newUser.checkEmail(req.body.email);

    if (!validEmail) {
      res.status(400).json({ message: 'Incorrect username/email/password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;

      res.json({ user: newUser, message: 'Successfully logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      req.logut();
      res.redirect('/login');
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
