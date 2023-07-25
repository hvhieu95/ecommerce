export function ProductDetail({count, price}) {

  return (
    <div className="productdetail">
      <div className="text5">Toys Company</div>
      <div className="text4">
        Gundam Mercury Witch
        <br />
        Mobile Suit
      </div>

      <div className="text6">
        Launch forward to the latest Gundam series Mobile Suit Gundam Mercury
        Witch!
        <br />
        The MS of 2 machines used in Prologue was released as early as a pair of
        shoes before the main installation!
        <br />
        The fastest 3D version of Gundam Rubris, which appeared in the story
        drawn as the previous Hitan series.
      </div>
      <div className="group2">
        <span className="text7">¥2,000</span>
        <div className="badge">
          <span className="text8">50%</span>
        </div>
      </div>
      <span className="text3">¥4,000</span>
      <div className="group3">
        <span>Subtotal ({count} item):</span>
        <span
          style={{
            fontWeight: "700",
          }}
        >
          ¥{price}
        </span>
      </div>
    </div>
  );
}
