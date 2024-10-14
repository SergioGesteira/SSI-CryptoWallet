import express from 'express';
import passport from 'passport';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
