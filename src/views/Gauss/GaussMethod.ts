import { fetchHTML } from "../../utils";
import Layout from "../Layout/Layout";

export default async function GaussMethod() {
  Layout();
  const layoutContent = document.getElementById("content") as HTMLDivElement;

  const gaussmethod = await fetchHTML("gaussmethod");
  layoutContent.innerHTML = gaussmethod;

  const equationsInput = document.getElementById("equations");
  const generateMatrixButton = document.getElementById("generateMatrix");
  const matrixContainer = document.getElementById("matrixContainer");
  const calculateButton = document.getElementById("calculate");
  const resultContainer = document.getElementById("resultContainer");
  const solutionContainer = document.getElementById("solutionContainer");

  let matrix = [];

  generateMatrixButton.addEventListener("click", () => {
    const n = parseInt(equationsInput.value, 10);
    matrix = Array.from({ length: n }, () => Array(n + 1).fill(0));
    matrixContainer.innerHTML = "";

    const table = document.createElement("table");
    for (let i = 0; i < n; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j <= n; j++) {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.step = "any";
        input.value = 0;
        input.addEventListener("input", (e) => {
          matrix[i][j] = parseFloat(e.target.value) || 0;
        });
        cell.appendChild(input);
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    matrixContainer.appendChild(table);

    calculateButton.style.display = "inline-block";
  });

  calculateButton.addEventListener("click", () => {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const factor = matrix[j][i] / matrix[i][i];
        for (let k = 0; k <= n; k++) {
          matrix[j][k] -= factor * matrix[i][k];
        }
      }
    }

    resultContainer.innerHTML = "<h3>Rezultati</h3>";
    const resultTable = document.createElement("table");
    for (let i = 0; i < n; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j <= n; j++) {
        const cell = document.createElement("td");
        cell.textContent = matrix[i][j].toFixed(2);
        row.appendChild(cell);
      }
      resultTable.appendChild(row);
    }
    resultContainer.appendChild(resultTable);

    const solutions = checkSolution(matrix);
    displaySolutions(solutions);
  });

  function checkSolution(matrix) {
    const n = matrix.length;
    let solutionType = "Nje zgjidhje unike";
    let solutions = [];

    for (let i = 0; i < n; i++) {
      if (
        matrix[i].slice(0, n).every((val) => val === 0) &&
        matrix[i][n] !== 0
      ) {
        solutionType = "Asnje zgjidhje";
        break;
      }

      if (
        matrix[i].slice(0, n).every((val) => val === 0) &&
        matrix[i][n] === 0
      ) {
        solutionType = "Infinit zgjidhje";
      }
    }

    if (solutionType === "Nje zgjidhje unike") {
      for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
          sum += matrix[i][j] * solutions[j];
        }
        solutions[i] = (matrix[i][n] - sum) / matrix[i][i];
      }
    }

    return { solutionType, solutions };
  }

  function displaySolutions(solutions) {
    solutionContainer.innerHTML = "";
    const { solutionType, solutions: values } = solutions;

    const typeElement = document.createElement("p");
    typeElement.textContent = solutionType;
    solutionContainer.appendChild(typeElement);

    if (solutionType === "Nje zgjidhje unike") {
      const solutionText = `x = ${values[0].toFixed(
        2
      )}, y = ${values[1].toFixed(2)}, z = ${values[2].toFixed(2)}`;
      const solutionElement = document.createElement("p");
      solutionElement.textContent = solutionText;
      solutionContainer.appendChild(solutionElement);
    }
  }
}
