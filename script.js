body {
  margin: 0;
  padding: 20px;
  background: #0f172a;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.calculator {
  width: 300px;
  background: #1e293b;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

#display {
  width: 100%;
  box-sizing: border-box;
  height: 75px;
  margin-bottom: 15px;
  padding: 15px;
  font-size: 30px;
  text-align: right;
  background: #020617;
  color: white;
  border: none;
  border-radius: 15px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  height: 60px;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

button:active {
  transform: scale(0.92);
}

.zero {
  grid-column: span 2;
}
