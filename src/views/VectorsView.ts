export default function VectorsView() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
     <div class="text-white">
      <h1 class="text-2xl font-bold pb-3">Vectors</h1>
      <div>
        <h2 class="text-xl font-semibold">What are Vectors?</h2>
        <p>
          A vector is an object that has both a magnitude and a direction.
          Geometrically, we can picture a vector as a directed line segment,
          whose length is the magnitude of the vector and with an arrow
          indicating the direction. The direction of the vector is from its tail
          to its head.
        </p>
        <img
          src="https://mathinsight.org/media/image/image/vector.png"
          alt="vector"
          width="449"
          height="221"
          class="place-self-center pt-10"
        />
        <p class="pt-5">
          Two vectors are the same if they have the same magnitude and
          direction. This means that if we take a vector and translate it to a
          new position (without rotating it), then the vector we obtain at the
          end of this process is the same vector we had in the beginning.
        </p>
        <br />
        <br />
        <p>
          Two examples of vectors are those that represent force and velocity.
          Both force and velocity are in a particular direction. The magnitude
          of the vector would indicate the strength of the force or the speed
          associated with the velocity.
        </p>
        <br />
        <p>
          To denote vectors we add a small arrow on top the symbol that
          represents the vector like this: \\(\\vec{a}\\). When we want to refer
          to a number and stress that it is not a vector, we can call the number
          a <abbr title="A scalar is a real number">scalar</abbr>. We will
          denote scalars with italics, as in <em>a</em> or <em>b</em> .
        </p>
      </div>
    </div>

    <div class="pt-14 text-white">
      <h2 class="text-xl font-semibold">Operations on Vectors</h2>

      <p>
        We can define a number of operations on vectors geometrically without
        reference to any coordinate system. Here we define
        <strong>addition</strong>, <strong>subtraction</strong>, and
        <strong>multiplication</strong> by a scalar. On separate pages, we
        discuss two different ways to multiply two vectors together:
        <strong>the dot product</strong> and <strong>the cross product</strong>.
      </p>
      <br />
      <h3 class="text-lg font-semibold">Addition of Vectors</h3>
      <p>
        Given two vectors \\(\\vec{a}\\) and \\(\\vec{b}\\) , we form their sum
        \\(\\vec{a}\\)+\\(\\vec{b}\\) , as follows. We translate the vector
        \\(\\vec{b}\\) until its tail coincides with the head of \\(\\vec{a}\\)
        . (Recall such translation does not change a vector.) Then, the directed
        line segment from the tail of \\(\\vec{a}\\) to the head of
        \\(\\vec{b}\\) is the vector \\(\\vec{a}\\)+\\(\\vec{b}\\) .
      </p>
      <img
        src="https://mathinsight.org/media/image/image/vector_a_plus_b.png"
        width="530"
        height="152"
        class="place-self-center py-20"
      />

      <p>
        The vector addition is the way forces and velocities combine. For
        example, if a car is travelling due north at 20 kilometers per hour and
        a child in the back seat behind the driver throws an object at 20
        kilometers per hour toward his sibling who is sitting due east of him,
        then the velocity of the object (relative to the ground!) will be in a
        north-easterly direction. The velocity vectors form a right triangle,
        where the total velocity is the hypotenuse. Therefore, the total speed
        of the object (i.e., the magnitude of the velocity vector) is \\(
        \\sqrt{20^2 + 20^2} \\) = 20 \\(\\sqrt{2}\\) kilometers per hour
        relative to the ground.
      </p>

      <br />
      <p>Addition of vectors satisfies two important properties.</p>

      <div class="pl-10 pt-5">
        1. The commutative law, which states the order of addition doesn't
        matter:
        <p class="text-center py-5">
          \\(\\vec{a}\\) + \\(\\vec{b}\\) = \\(\\vec{b}\\) + \\(\\vec{a}\\)
        </p>
        <p>
          This law is also called the parallelogram law, as illustrated in the
          below image. Two of the edges of the parallelogram define
          \\(\\vec{a}\\) + \\(\\vec{b}\\) , and the other pair of edges define
          \\(\\vec{b}\\) + \\(\\vec{a}\\) . But, both sums are equal to the same
          diagonal of the parallelogram.
        </p>
        <img
          src="https://mathinsight.org/media/image/image/vector_parallelogram_law.png"
          alt="CommutativeLawVector"
          class="place-self-center py-10"
          width="530"
          height="263"
        />
      </div>

      <div class="pl-10 pt-5">
        2. The associative law, which states that the sum of three vectors does
        not depend on which pair of vectors is added first:
        <p class="text-center py-5">
          (\\(\\vec{a}\\) + \\(\\vec{b}\\)) + \\(\\vec{c}\\) = \\(\\vec{a}\\) +
          (\\(\\vec{b}\\) + \\(\\vec{c}\\))
        </p>
      </div>
    </div>
  `;
  // @ts-ignore
  MathJax.typeset();
}
