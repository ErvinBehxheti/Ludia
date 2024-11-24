import circle from "../../public/circle.png"
import rightTriangle from "../../public/right-trightangle.png"
import sinCosTan from "../../public/sin-cos-tan.png"
import trigonometry from "../../public/trigonometry.png"
import radians from "../../public/radians.jpg"

export default function TrigView() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
    <article class="text-white text-lg space-y-4">
      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">What is Trigonometry?</h1>
        <p>
          Trigonometry comes from the Greek words
          <strong>trigonon</strong> (triangle) and
          <strong>metron</strong> (measure). It’s the study of the relationships
          between angles and sides of triangles. These relationships are
          incredibly useful in solving real-world problems like measuring
          heights, distances, and angles.
        </p>
        <img
          src="${trigonometry}"
          alt="Trigonometry"
          width="678"
          height="368"
          class="bg-white mx-auto"
        />
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">
          Right Triangles: The Heart of Trigonometry
        </h1>
        <p>
          A right triangle has one angle that’s exactly 90°. It’s special
          because the sides have predictable relationships:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>Hypotenuse:</strong> The longest side, opposite the 90°
            angle.
          </li>
          <li>
            <strong>Opposite side:</strong> Across from the angle you’re
            studying.
          </li>
          <li>
            <strong>Adjacent side:</strong> Next to the angle you’re studying.
          </li>
        </ul>
        <img
          src="${rightTriangle}"
          alt="right-triangle"
          width="575"
          height="374"
          class="bg-white mx-auto"
        />
      </section>

      <section class="text-black">
        <h1 class="text-3xl font-semibold text-white pt-4">
          How to define the Trigonometric Ratios
        </h1>
        <p class="mt-4 text-white">
          These ratios define the relationships between the sides of a right
          triangle:
        </p>
        <div class="flex flex-col justify-center items-center gap-4 mt-4">
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
      <img
        src="${sinCosTan}"
        alt="sin-cos-tan"
        width="600"
        height="314"
        class="bg-white mx-auto"
      />

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">What Is Theta (θ)?</h2>
        <p>
          Theta (θ) is just a symbol to represent an angle. It’s used because
          it’s easier than describing the angle in words.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">
          Angle Measurement: Degrees vs. Radians
        </h2>
        <p>Angles can be measured in two ways:</p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Degrees:</strong> A full circle is \\( 360° \\).</li>
          <li>
            <strong>Radians:</strong> A full circle is \\( 2π \\) radians.
          </li>
        </ul>
        <p>To convert between degrees and radians:</p>
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          Radians = Degrees × \\( \\frac{π}{180} \\)
        </p>
        <br />
        <p class="bg-gray-100 text-black px-2 py-1 rounded inline-block">
          Degrees = Radians × \\( \\frac{180}{π} \\)
        </p>
        <img
          src="${radians}"
          alt="radians"
          width="670"
          height="260"
          class="mx-auto"
        />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">Important Trigonometric Identities</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>Pythagorean Identity:</strong> \\( sin^2(θ) + cos^2(θ) = 1
            \\)
          </li>
          <li>\\( 1 + tan^2(θ) = sec^2(θ) \\)</li>
          <li>\\( 1 + cot^2(θ) = csc^2(θ) \\)</li>
        </ul>
        <p>
          These identities are the foundation for solving complex trigonometric
          equations.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">What About Circles?</h2>
        <p>
          Trigonometry isn’t just about triangles—it’s also about circles.
          Angles can be thought of as slices of a circle, and the unit circle (a
          circle with a radius of 1) is a key tool for understanding
          trigonometric functions.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">The Unit Circle</h2>
        <p>
          The unit circle is a circle with a radius of 1, centered at the origin
          of a coordinate plane. It provides a geometric way to understand
          angles and trigonometric functions.
        </p>
        <p>Key points to remember:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            The x-coordinate of a point on the unit circle represents \\( cos(θ)
            \\).
          </li>
          <li>The y-coordinate represents \\( sin(θ) \\).</li>
          <li>Tangent (\\( tan(θ) \\)) can be calculated as \\( y / x \\).</li>
        </ul>
        <p>
          Memorizing the coordinates of key angles (like \\( 0° \\), \\( 30°
          \\), \\( 45° \\), \\( 60° \\), \\( 90° \\)) helps solve trigonometric
          problems more efficiently.
        </p>
      </section>

      <section class="space-y-4">
        <h1 class="text-3xl font-semibold">The Four Quadrants</h1>
        <p>
          The coordinate plane is divided into four quadrants, which help us
          understand the signs of trigonometric functions based on the angle’s
          location:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <strong>Quadrant I:</strong> \\( 0° \\) to \\( 90° \\) (All
            functions are positive).
          </li>
          <li>
            <strong>Quadrant II:</strong> \\( 90° \\) to \\( 180° \\) (Sine is
            positive).
          </li>
          <li>
            <strong>Quadrant III:</strong> \\( 180° \\) to \\( 270° \\) (Tangent
            is positive).
          </li>
          <li>
            <strong>Quadrant IV:</strong> \\( 270° \\) to \\( 360° \\) (Cosine
            is positive).
          </li>
        </ul>
        <p>
          This information is essential for solving trigonometric problems
          involving angles greater than \\( 90° \\).
        </p>
        <img
          src="${circle}"
          alt="Unit Circle"
          width="350"
          height="350"
          class="bg-white mx-auto"
        />
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">What Are Sec, Csc, and Cot?</h2>
        <p>
          These are reciprocal functions of sine, cosine, and tangent. They’re
          useful in specific calculations:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Secant (sec):</strong> \\( sec(θ) = 1 / cos(θ) \\)</li>
          <li><strong>Cosecant (csc):</strong> \\( csc(θ) = 1 / sin(θ) \\)</li>
          <li><strong>Cotangent (cot):</strong> \\( cot(θ) = 1 / tan(θ) \\)</li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-bold">
          Real-Life Applications of Trigonometry
        </h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Video games: Simulating realistic movements.</li>
          <li>Engineering: Designing buildings and bridges.</li>
          <li>Astronomy: Measuring distances to celestial objects.</li>
          <li>Medicine: Analyzing medical images.</li>
        </ul>
      </section>
    </article>
    `;

    // @ts-ignore
    MathJax.typeset();
}
