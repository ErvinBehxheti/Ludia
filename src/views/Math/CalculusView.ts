export default function CalculusView() {
  const learningView = document.getElementById(
    "learning-view"
  ) as HTMLDivElement;

  learningView.innerHTML = `
    <article class="text-white text-lg space-y-4">
      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">What is Calculus?</h1>
        <p>
          Calculus is a branch of mathematics focused on studying change and accumulation. It is built around two fundamental concepts: 
          <strong>derivatives</strong>, which measure the rate of change of quantities, and <strong>integrals</strong>, which calculate accumulated quantities like area and volume. 
          Together, these tools form the backbone of modern mathematical analysis, enabling us to model dynamic systems, optimize processes, and solve real-world problems across diverse fields such as physics, engineering, biology, and economics.
        </p>
        <p>
          The essence of calculus lies in its ability to deal with infinitely small quantities, enabling precise analysis of continuous change. To fully appreciate this, we'll explore the concepts of limits, derivatives, and integrals in depth, with visualizations and examples.
        </p>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">Limits: The Building Block of Calculus</h1>
        <p>
          The concept of limits forms the foundation of calculus. Limits allow us to understand the behavior of a function as its input approaches a specific value, even if the function is not defined at that point. This idea is crucial for defining derivatives and integrals, as well as for understanding continuity.
        </p>
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          \\( \\lim_{x \\to c} f(x) = L \\)
        </p>
        <p>
          This expression means that as \\(x\\) approaches \\(c\\), the value of the function \\(f(x)\\) gets arbitrarily close to \\(L\\). Limits are especially useful for handling indeterminate forms like \\( \\frac{0}{0} \\) and analyzing infinite behavior.
        </p>
        <h2 class="text-2xl font-bold">Key Ideas About Limits</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Limits help us analyze the behavior of functions near points of discontinuity or singularity.</li>
          <li>They enable the precise definition of derivatives and integrals.</li>
          <li>Using limits, we can study asymptotes, infinite series, and convergence of sequences.</li>
        </ul>
        <h2 class="text-2xl font-bold">Common Limit Properties</h2>
        <p>
          Here are some key properties of limits that are often used in calculus:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>\\( \\lim_{x \\to c} [f(x) + g(x)] = \\lim_{x \\to c} f(x) + \\lim_{x \\to c} g(x) \\)</li>
          <li>\\( \\lim_{x \\to c} [f(x) \\cdot g(x)] = \\lim_{x \\to c} f(x) \\cdot \\lim_{x \\to c} g(x) \\)</li>
          <li>\\( \\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to c} f(x)}{\\lim_{x \\to c} g(x)} \\) (if \\( \\lim_{x \\to c} g(x) \\neq 0 \\))</li>
        </ul>
        <h2 class="text-2xl font-bold">Interactive Example with GeoGebra</h2>
        <p>
          Visualize how the limit works using GeoGebra: plot a function \\(f(x) = \\frac{\\sin x}{x}\\) as \\(x\\) approaches 0. Observe how the function value stabilizes around 1, demonstrating the limit.
        </p>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">Derivatives: Rate of Change</h1>
        <p>
          Derivatives provide a mathematical way to describe how one quantity changes with respect to another. For example, in physics, the derivative of position with respect to time is velocity.
        </p>
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          \\( f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\)
        </p>
        <p>
          This formula defines the derivative as the limit of the average rate of change as the interval \\(h\\) becomes infinitely small. Geometrically, this represents the slope of the tangent line to a curve at a given point.
        </p>
        <h2 class="text-2xl font-bold">Higher-Order Derivatives</h2>
        <p>
          The second derivative, denoted as \\(f''(x)\\), represents the rate of change of the first derivative and provides insights into the concavity of a function. Similarly, higher-order derivatives (e.g., \\(f'''(x)\\), \\(f^{(4)}(x)\\)) can describe more complex rates of change.
        </p>
        <h2 class="text-2xl font-bold">Applications of Derivatives</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Calculating instantaneous velocity or acceleration in physics.</li>
          <li>Optimizing profit, cost, and resource allocation in economics.</li>
          <li>Predicting rates of chemical reactions in chemistry.</li>
          <li>Modeling growth rates in biology or population studies.</li>
        </ul>
        <h2 class="text-2xl font-bold">Interactive GeoGebra Visualization</h2>
        <p>
          Use GeoGebra to draw a function, such as \\(f(x) = x^2\\), and observe the tangent lines at different points. Experiment with varying points to see how the slope (derivative) changes.
        </p>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">Integrals: Area Under the Curve</h1>
        <p>
          Integrals allow us to calculate accumulated quantities, such as total distance, area, or volume. The integral of a function can be interpreted as the area under its curve between two points.
        </p>
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          \\( \\int_a^b f(x) dx \\)
        </p>
        <p>
          This represents the definite integral, which calculates the total accumulation of \\(f(x)\\) from \\(x = a\\) to \\(x = b\\). Integrals are closely related to derivatives through the Fundamental Theorem of Calculus.
        </p>
        <h2 class="text-2xl font-bold">Fundamental Theorem of Calculus</h2>
        <p>
          The Fundamental Theorem of Calculus links derivatives and integrals, providing a way to evaluate definite integrals using antiderivatives:
        </p>
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          \\( \\int_a^b f(x) dx = F(b) - F(a) \\)
        </p>
        <p>
          Here, \\(F(x)\\) is an antiderivative of \\(f(x)\\), meaning \\(F'(x) = f(x)\\).
        </p>
        <h2 class="text-2xl font-bold">Applications of Integrals</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Finding the area of irregular shapes.</li>
          <li>Calculating work done by a force over a distance.</li>
          <li>Determining total accumulated quantities, like charge or mass.</li>
        </ul>
        <h2 class="text-2xl font-bold">Interactive Example with GeoGebra</h2>
        <p>
          Explore integrals by plotting a function, such as \\(f(x) = \\sin(x)\\), and visualizing the shaded area under the curve between two points. Experiment with varying bounds to see how the area changes.
        </p>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">Applications of Calculus</h1>
        <p>
          Calculus has profound applications across numerous fields. From engineering and natural sciences to economics and computer science, it provides the tools to model, analyze, and solve problems involving continuous change and accumulation.
        </p>
        <h2 class="text-2xl font-bold">Practical Examples</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Simulating planetary motion and satellite trajectories in physics.</li>
          <li>Designing optimal structures and materials in engineering.</li>
          <li>Maximizing efficiency and profit in business processes.</li>
          <li>Predicting ecological and biological population trends.</li>
        </ul>
        <h2 class="text-2xl font-bold">Interactive Example</h2>
        <p>
          Use the canvas below to simulate real-time velocity and distance graphs. Modify parameters to see the impact on motion and accumulation.
        </p>
        <canvas id="canvas" width="500" height="500" class="border bg-white rounded-lg"></canvas>
      </section>
    </article>
  `;

  // Initialize MathJax rendering
  // @ts-ignore
  MathJax.typeset();

  // Interactive example logic
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText("Interactive example coming soon!", 10, 50);
  }
}
