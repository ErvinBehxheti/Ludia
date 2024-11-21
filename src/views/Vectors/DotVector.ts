export default function DotVector() {
  const learningView = document.getElementById("learning-view") as HTMLElement;

  learningView.innerHTML = `
    <article class="text-white text-lg">
      <h1 class="text-3xl font-semibold">The Dot Product</h1>
      <br />
      <p>
        The dot product between two vectors is based on the projection of one
        vector onto another (Basically how much of one vector is on top of
        another vector). Let's imagine we have two vectors \\(\\vec{a}\\) and
        \\(\\vec{b}\\) , and we want to calculate how much of \\(\\vec{a}\\) is
        pointing in the same direction as the vector \\(\\vec{b}\\) . We want a
        quantity that would be positive if the two vectors are pointing in
        similar directions, zero if they are perpendicular (when their tails
        touch and they form a 90 degree angle), and negative if the two vectors
        are pointing in nearly opposite directions. We will define the dot
        product between the vectors to capture these quantities.
      </p>
      <br />
      <p>
        But first, notice that the question “how much of \\(\\vec{a}\\) is
        pointing in the same direction as the vector \\(\\vec{b}\\) ” does not
        have anything to do with the magnitude (or length) of \\(\\vec{b}\\) ;
        it is based only on its direction. (Recall that a vector has a magnitude
        and a direction.) The answer to this question should not depend on the
        magnitude of \\(\\vec{b}\\) , only its direction. To sidestep any
        confusion caused by the magnitude of \\(\\vec{b}\\) , let's scale the
        vector so that it has length one. In other words, let's replace
        \\(\\vec{b}\\) with the
        <abbr title="A unit vector is a vector with the length of 1"
          >unit vector</abbr
        >
        that points in the same direction as \\(\\vec{b}\\) . We'll call this
        vector \\(\\vec{u}\\) , which is defined by
      </p>
      <p class="text-center py-4">
        \\[ \\vec{u} = \\frac{\\vec{b}}{\\lvert \\vec{b} \\rvert} \\]
      </p>
      <p>
        The dot product of \\(\\vec{a}\\) with unit vector \\(\\vec{u}\\) ,
        denoted \\(\\vec{a}\\)⋅\\(\\vec{u}\\) , is defined to be the projection
        of \\(\\vec{a}\\) in the direction of \\(\\vec{u}\\) , or the amount
        that \\(\\vec{a}\\) is pointing in the same direction as unit vector
        \\(\\vec{u}\\) . Let's assume for a moment that \\(\\vec{a}\\) and
        \\(\\vec{u}\\) are pointing in similar directions. Then, you can imagine
        \\(\\vec{a}\\)⋅\\(\\vec{u}\\) as the length of the shadow of
        \\(\\vec{a}\\) onto \\(\\vec{u}\\) if their tails were together and the
        sun was shining from a direction perpendicular to \\(\\vec{u}\\) . By
        forming a right triangle with \\(\\vec{a}\\) and this shadow, you can
        use geometry to calculate that
      </p>

      <p class="text-center">
        \\[ \\vec{a} \\cdot \\vec{u} = |\\vec{a}| \\cos \\theta \\]
      </p>

      <p>
        where \\(\\theta\\) is the angle between \\(\\vec{a}\\) and
        \\(\\vec{u}\\)
      </p>

      <img
        src="https://mathinsight.org/media/image/image/dot_product_projection_unit_vector.png"
        alt="angle-vector"
        width="314"
        height="262"
        class="py-6 place-self-center"
      />
      <p>
        If \\(\\vec{a}\\) and \\(\\vec{u}\\) were perpendicular, there would be
        no shadow. That corresponds to the case when \\( \\cos\\theta =
        \\cos\\pi/2 = 0 \\) and \\(\\vec{a}⋅\\vec{u}=0\\) . If the angle
        \\(\\theta\\) between \\(\\vec{a}\\) and \\(\\vec{u}\\) were larger than
        \\(\\pi/2\\) , then the shadow wouldn't hit \\(\\vec{u}\\) . Since in
        this case \\(\\vec{u}\\theta<\\theta\\) , the dot product
        \\(\\vec{a}⋅\\vec{u}\\) is also negative. You could think of
        \\(-\\vec{a}⋅\\vec{u}\\) (which is positive in this case) as being the
        length of the shadow of \\(\\vec{a}\\) on the vector \\(-\\vec{u}\\) ,
        which points in the opposite direction of \\(\\vec{u}\\) .
      </p>
      <br />
      <p>
        But we need to get back to the dot product \\(\\vec{a}\\cdot\\vec{b}\\)
        , where \\(\\vec{b}\\) may have a magnitude different than one. This dot
        product \\(\\vec{a}\\cdot\\vec{b}\\) should depend on the magnitude of
        both vectors, ∥\\(\\vec{a}\\)∥ and ∥\\(\\vec{b}\\)∥ , and be symmetric
        in those vectors. Hence, we don't want to define
        \\(\\vec{a}\\cdot\\vec{b}\\) to be exactly the projection of
        \\(\\vec{a}\\) on \\(\\vec{b}\\) ; we want it to reduce to this
        projection for the case when \\(\\vec{b}\\) is a unit vector. We can
        accomplish this very easily: just plug the definition
        \\(\\vec{u}=\\vec{b}\\cdot\\vec{∥b∥}\\) into our dot product definition
        of equation (1) . This leads to the definition that the dot product
        \\(\\vec{a}\\cdot\\vec{b}\\) , divided by the magnitude ∥\\(\\vec{b}\\)∥
        of \\(\\vec{b}\\) , is the projection of \\(\\vec{a}\\) onto
        \\(\\vec{b}\\) .
      </p>
      <p class="text-center">
        \\[\\frac{\\vec{a}\\cdot\\vec{b}}{\\lvert \\vec{b} \\rvert} = \\lvert
        \\vec{a} \\rvert \\cos\\theta \\]
      </p>
      <p>
        Then, if we multiply by through by ∥\\(\\vec{b}\\)∥ , we get a nice
        symmetric definition for the dot product \\(\\vec{a}\\cdot\\vec{b}\\) .
      </p>
      <p class="text-center">
        \\[\\vec{a}\\cdot\\vec{b}=\\lvert \\vec{a} \\rvert \\lvert \\vec{b}
        \\rvert \\cos \\theta \\]
      </p>
      <p>
        The picture of the geometric interpretation of
        \\(\\vec{a}\\cdot\\vec{b}\\) is almost identical to the above picture
        for \\(\\vec{a}\\cdot\\vec{u}\\) . We just have to remember that we have
        to divide through by \\(\\lvert \\vec{b} \\rvert\\) to get the
        projection of \\(\\vec{a}\\) onto \\(\\vec{b}\\) .
      </p>
      <img
        src="https://mathinsight.org/media/image/image/dot_product_projection.png"
        alt="dot_project"
        width="409"
        height="287"
        class="place-self-center py-10"
      />
      <section id="article-vector-application" class="pt-14">
      <h2 class="text-2xl font-semibold">Applications of Dot Product (Dot Vectors) in Computer Science and Physics</h2>
      <br />
      <div>
        <h1 class="font-semibold text-xl">Computer Science</h1>
        <div class="pl-4 pt-4">
          <p class="font-medium">1. Graphics and Lighting:</p>
          <div class="pl-8">
            <li>Used in calculating the angle between light and surface normals for shading (Phong shading, Lambertian reflectance).</li>
            <li>Determines how much light a surface reflects based on the cosine of the angle.</li>
          </div>
        </div>
        <div class="pl-4 pt-4">
          <p class="font-medium">2. Machine Learning and Recommendation Systems::</p>
          <div class="pl-8">
            <li>Measures similarity between vectors (e.g., cosine similarity in text/document analysis and user-item preferences).</li>
          </div>
        </div>
        <div class="pl-4 pt-4">
          <p class="font-medium">3. Physics Simulations:</p>
          <div class="pl-8">
            <li>Helps determine the component of a vector along a direction (e.g., projection of velocity onto a plane).</li>
          </div>
        </div>
      </div>
      <div>
        <h1 class="font-semibold text-xl pt-4">Physics</h1>
        <div class="pl-4 pt-4">
          <p class="font-medium">1. Work Done:</p>
          <div class="pl-8">
            <li>Dot product calculates work as 𝑊 = 𝐹 ⋅ 𝑑, where 𝐹 is force and 𝑑 is displacement.</li>
            <li>Only the component of force in the direction of displacement contributes to work.</li>
          </div>
        </div>
        <div class="pl-4 pt-4">
          <p class="font-medium">2. Electric Flux:</p>
          <div class="pl-8">
            <li>Calculated using the dot product of the electric field vector and area vector.</li>
          </div>
        </div>
        <div class="pl-4 pt-4">
          <p class="font-medium">3. Projection of Forces:</p>
          <div class="pl-8">
            <li>Dot product projects forces or velocities onto specific directions for analysis.</li>
          </div>
        </div>
      </div>
      <br />
      <h1 class="font-semibold text-xl py-4">Why should I learn the Dot Product?</h1>
      <p>The dot product is a powerful tool that allows you to extract valuable information from vectors. By understanding how to calculate and interpret the dot product, you can determine the angle between two vectors, project one vector onto another, and calculate the work done by a force.</p>
    </section>
    </article>
  `;
  // @ts-ignore
  MathJax.typeset();
}
