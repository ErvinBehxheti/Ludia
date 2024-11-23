export default function TrigView() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
          <header class="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 text-center">
    <h1 class="text-3xl font-bold">A Beginner’s Guide to Trigonometry</h1>
    <p class="text-lg mt-2">For College Students Struggling with Math</p>
  </header>
  <main class="max-w-5xl mx-auto p-6 text-white text-lg space-y-8">
    <!-- Section 1 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">1. What Is Trigonometry?</h2>
      <p class="mt-4">
        Trigonometry comes from the Greek words <strong>trigonon</strong> (triangle) and
        <strong>metron</strong> (measure). It’s the study of the relationships between angles
        and sides of triangles. These relationships are incredibly useful in solving real-world
        problems like measuring heights, distances, and angles.
      </p>
    </section>

    <!-- Section 2 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">2. Right Triangles: The Heart of Trigonometry</h2>
      <p class="mt-4">
        A right triangle has one angle that’s exactly 90°. It’s special because the sides have
        predictable relationships:
      </p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Hypotenuse:</strong> The longest side, opposite the 90° angle.</li>
        <li><strong>Opposite side:</strong> Across from the angle you’re studying.</li>
        <li><strong>Adjacent side:</strong> Next to the angle you’re studying.</li>
      </ul>
    </section>

    <!-- Section 3 -->
    <section class="text-black">
      <h2 class="text-2xl font-bold text-purple-600">3. Meet the Trigonometric Ratios</h2>
      <p class="mt-4">These ratios define the relationships between the sides of a right triangle:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-xl font-bold text-blue-600">Sine (sin)</h3>
          <p class="mt-2">
            The ratio of the opposite side to the hypotenuse:
            <br />
            <code class="bg-gray-100 px-2 py-1 rounded">
              sin(θ) = Opposite / Hypotenuse
            </code>
          </p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-xl font-bold text-blue-600">Cosine (cos)</h3>
          <p class="mt-2">
            The ratio of the adjacent side to the hypotenuse:
            <br />
            <code class="bg-gray-100 px-2 py-1 rounded">
              cos(θ) = Adjacent / Hypotenuse
            </code>
          </p>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-xl font-bold text-blue-600">Tangent (tan)</h3>
          <p class="mt-2">
            The ratio of the opposite side to the adjacent side:
            <br />
            <code class="bg-gray-100 px-2 py-1 rounded">
              tan(θ) = Opposite / Adjacent
            </code>
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">4. What Is Theta (θ)?</h2>
      <p class="mt-4">
        Theta (θ) is just a symbol to represent an angle. It’s used because it’s easier than
        describing the angle in words.
      </p>
    </section>

    <!-- Section 5 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">5. Why Did Mathematicians Invent Trigonometry?</h2>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Navigation:</strong> Sailors used stars and trigonometry to navigate oceans.</li>
        <li><strong>Astronomy:</strong> Calculating distances to stars and planets.</li>
        <li><strong>Construction:</strong> Measuring slopes and angles for buildings.</li>
      </ul>
    </section>

    <!-- Section 6 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">6. What About Circles?</h2>
      <p class="mt-4">
        Trigonometry isn’t just about triangles—it’s also about circles. Angles can be thought
        of as slices of a circle, and the unit circle (a circle with a radius of 1) is a key
        tool for understanding trigonometric functions.
      </p>
    </section>

    <!-- Section 7 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">7. What Are Sec, Csc, and Cot?</h2>
      <p class="mt-4">
        These are reciprocal functions of sine, cosine, and tangent. They’re useful in specific
        calculations:
      </p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>
          <strong>Secant (sec):</strong> \( sec(θ) = 1 / cos(θ) \)
        </li>
        <li>
          <strong>Cosecant (csc):</strong> \( csc(θ) = 1 / sin(θ) \)
        </li>
        <li>
          <strong>Cotangent (cot):</strong> \( cot(θ) = 1 / tan(θ) \)
        </li>
      </ul>
    </section>

    <!-- Section 8 -->
    <section>
      <h2 class="text-2xl font-bold text-purple-600">8. Real-Life Applications of Trigonometry</h2>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Video games: Simulating realistic movements.</li>
        <li>Engineering: Designing buildings and bridges.</li>
        <li>Astronomy: Measuring distances to celestial objects.</li>
        <li>Medicine: Analyzing medical images.</li>
      </ul>
    </section>
  </main>
    `;
}
