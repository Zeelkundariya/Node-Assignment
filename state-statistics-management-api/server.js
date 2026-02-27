const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


let states = [
  { id: 1, name: "Andhra Pradesh", population: 49386799, literacyRate: 67.02, annualBudget: 279279, gdp: 14000000 },
  { id: 2, name: "Arunachal Pradesh", population: 1383727, literacyRate: 65.38, annualBudget: 28000, gdp: 300000 },
  { id: 3, name: "Assam", population: 31205576, literacyRate: 72.19, annualBudget: 122000, gdp: 4500000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 5, name: "Chhattisgarh", population: 25545198, literacyRate: 70.28, annualBudget: 121500, gdp: 4000000 },
  { id: 6, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 },
  { id: 7, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 8, name: "Haryana", population: 25351462, literacyRate: 75.55, annualBudget: 180000, gdp: 9000000 }
];

app.get("/states", (req, res) => {
  res.status(200).json(states);
});

app.get("/states/highest-gdp", (req, res) => {
  let highest = states[0];

  for (let i = 1; i < states.length; i++) {
    if (states[i].gdp > highest.gdp) {
      highest = states[i];
    }
  }
  res.status(200).json(highest);
});

app.get("/states/:id", (req, res) => {
  const id = Number(req.params.id);
  let foundState = null;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      foundState = states[i];
      break;
    }
  }
  if (!foundState) {
    return res.status(404).json({ message: "State not found" });
  }
  res.status(200).json(foundState);
});


// app.get("/states/highest-gdp", (req, res) => {
//   let highest = states[0];

//   for (let i = 1; i < states.length; i++) {
//     if (states[i].gdp > highest.gdp) {
//       highest = states[i];
//     }
//   }

//   res.status(200).json(highest);
// });


app.post("/states", (req, res) => {
  let newId = states.length + 1;
  const newState = {
    id: newId,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp
  };
  states.push(newState);
  res.status(201).json(newState);
});


app.put("/states/:id", (req, res) => {
  const id = Number(req.params.id);
  let index = -1;

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }
  states[index] = { id, ...req.body };
  res.status(200).json(states[index]);
});


app.put("/states/:id/budget", (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      states[i].annualBudget = req.body.annualBudget;
      return res.status(200).json(states[i]);
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.put("/states/:id/population", (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      states[i].population = req.body.population;
      return res.status(200).json(states[i]);
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.patch("/states/:id/literacy", (req, res) => {
  const id = Number(req.params.id);

  for (let state of states) {
    if (state.id === id) {
      state.literacyRate = req.body.literacyRate;
      return res.status(200).json(state);
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.patch("/states/:id/gdp", (req, res) => {
  const id = Number(req.params.id);

  for (let state of states) {
    if (state.id === id) {
      state.gdp = req.body.gdp;
      return res.status(200).json(state);
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.patch("/states/:id", (req, res) => {
  const id = Number(req.params.id);

  for (let state of states) {
    if (state.id === id) {
      for (let key in req.body) {
        state[key] = req.body[key];
      }
      return res.status(200).json(state);
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.delete("/states/:id", (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < states.length; i++) {
    if (states[i].id === id) {
      states.splice(i, 1);
      return res.status(204).json();
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.delete("/states/name/:stateName", (req, res) => {
  const name = req.params.stateName.toLowerCase();

  for (let i = 0; i < states.length; i++) {
    if (states[i].name.toLowerCase() === name) {
      states.splice(i, 1);
      return res.status(204).json();
    }
  }
  res.status(404).json({ message: "State not found" });
});


app.delete("/states/low-literacy/:percentage", (req, res) => {
  const percent = Number(req.params.percentage);
  let count = 0;

  for (let i = states.length - 1; i >= 0; i--) {
    if (states[i].literacyRate < percent) {
      states.splice(i, 1);
      count++;
    }
  }
  res.status(200).json({ deletedCount: count });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});