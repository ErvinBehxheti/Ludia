export default function VectorsView() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
  <article class="text-white">
        <section id="vector-introduction">
      <h1 class="text-2xl font-bold pb-3">Vectors</h1>
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
      </section>

    <section id="vector-addition" class="pt-14">
      <h2 class="text-xl font-semibold">Operations on Vectors</h2>

      <p>
        We can define a number of operations on vectors geometrically without
        reference to any coordinate system. Here we define
        <strong>addition</strong>, <strong>subtraction</strong>, and
        <strong>multiplication</strong> by a scalar. On separate pages, we
        discuss two different ways to multiply two vectors together:
        <u><a href="/learn/vectors/dot-product" data-link class="text-[#2bbc8a] font-semibold">the dot product</a></u> and <u><a href="/learn/vectors/cross-product" data-link class="text-[#2bbc8a] font-semibold">the cross product</a></u>.
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
    </section>

    <section id="vector-subtraction" class="pt-14">
      <h2 class="text-xl font-semibold">Subtracting Vectors</h2>
      <p>
        Before we define subtraction, we define the vector -\\(\\vec{a}\\) ,
        which is the opposite of \\(\\vec{a}\\) . The vector −\\(\\vec{a}\\) is
        the vector with the same magnitude as \\(\\vec{a}\\) but that is pointed
        in the opposite direction
      </p>
      <img
        src="https://mathinsight.org/media/image/image/vector_opposite.png"
        alt="inverse-vector"
        width="565"
        height="219"
        class="place-self-center py-10"
      />
      <br />
      <p>We define subtraction as addition with the opposite of a vector:</p>
      <br />
      <p class="text-center">
        \\(\\vec{b}\\) − \\(\\vec{a}\\) = \\(\\vec{b}\\) + (−\\(\\vec{a}\\)).
      </p>
      <br />
      <p>
        This is equivalent to turning vector \\(\\vec{a}\\) around in the
        applying the above rules for addition. Can you see how the vector
        \\(\\vec{x}\\) in the below figure is equal to \\(\\vec{b}\\) −
        \\(\\vec{a}\\) ? Notice how this is the same as stating that
        \\(\\vec{a}\\) + \\(\\vec{x}\\) = \\(\\vec{b}\\) , just like with
        subtraction of scalar numbers.
      </p>
      <img
        src="https://mathinsight.org/media/image/image/vector_b_minus_a.png"
        alt="Vector-subtraction"
        class="place-self-center py-10"
        width="543"
        height="134"
      />
    </section>

    <section id="vector-multiplication" class="pt-14">
      <h2 class="text-xl font-semibold">Scalar Multiplications</h2>
      <br />
      <p>
        Given a vector \\(\\vec{a}\\) and a real number (scalar) λ , we can form
        the vector λ\\(\\vec{a}\\) as follows. If λ is positive, then
        λ\\(\\vec{a}\\) is the vector whose direction is the same as the
        direction of \\(\\vec{a}\\) and whose length is λ times the length of
        \\(\\vec{a}\\) . In this case, multiplication by λ simply stretches (if
        λ>1 ) or compresses (if 0 &lt; λ &lt; 1) the vector \\(\\vec{a}\\) .
      </p>
      <br />
      <p>
        If, on the other hand, λ is negative, then we have to take the opposite
        of \\(\\vec{a}\\) before stretching or compressing it. In other words,
        the vector λ\\(\\vec{a}\\) points in the opposite direction of
        \\(\\vec{a}\\) , and the length of λ\\(\\vec{a}\\) is |λ| times the
        length of a . No matter the sign of λ , we observe that the magnitude of
        λ\\(\\vec{a}\\) is |λ| times the magnitude of \\(\\vec{a}\\) :
        ∥λ\\(\\vec{a}\\)∥=|λ|∥\\(\\vec{a}\\)∥ .
      </p>
      <br />
      <p>
        Scalar multiplications satisfies many of the same properties as the
        usual multiplication.
      </p>
      <br />
      <div class="pl-10">
        <li>
          1.
          <em>s</em
          >(\\(\\vec{a}\\)+\\(\\vec{b}\\))=<em>s</em>\\(\\vec{a}\\)+<em>s</em>\\(\\vec{b}\\)
          (distributive law, form 1)
        </li>
        <li>
          2.
          (<em>s</em>+<em>t</em>)\\(\\vec{a}\\)=<em>s</em>\\(\\vec{a}\\)+<em>t</em>\\(\\vec{a}\\)
          (distributive law, form 2)
        </li>
        <li>3. 1\\(\\vec{a}\\)=\\(\\vec{a}\\)</li>
        <li>4. (−1)\\(\\vec{a}\\)=−\\(\\vec{a}\\)</li>
        <li>5. 0\\(\\vec{a}\\)=0</li>
      </div>
      <br />
      <p>
        In the last formula, the zero on the left is the number 0, while the
        zero on the right is the vector 0 , which is the unique vector whose
        length is zero.
      </p>
      <br />
      <p>
        If a=λb for some scalar λ , then we say that the vectors \\(\\vec{a}\\)
        and \\(\\vec{b}\\) are parallel. If λ is negative, some people say that
        \\(\\vec{a}\\) and \\(\\vec{b}\\) are anti-parallel, but we will not use
        that language.
      </p>
      <br />
      <br />
      <p>
        We were able to describe <strong>vectors</strong>,
        <strong>vector addition</strong>, <strong>vector subtraction</strong>,
        and <strong>scalar multiplication</strong> without reference to any
        coordinate system. The advantage of such purely geometric reasoning is
        that our results hold generally, independent of any coordinate system in
        which the vectors live. However, sometimes it is useful to express
        vectors in terms of coordinates, as discussed in a page about
        <a
          href="https://mathinsight.org/vectors_cartesian_coordinates_2d_3d"
          class="text-green-400"
          >vectors in the standard Cartesian coordinate systems</a
        >
        in the plane and in three-dimensional space.
      </p>
    </section>
  </article>
  `;
  // @ts-ignore
  MathJax.typeset();
}
