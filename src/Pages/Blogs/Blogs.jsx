import React from 'react';
import './Blogs.css';
// import fabricSelectionImage from '../../assets/images/fabric-selection.jpg';

const Blogs = () => {
  return (
    <>
      <div className="blog-post">
        <header className="post-header">
          <h1>How to Choose the Perfect Fabric for Your Custom Suit</h1>
          <p className="post-date">May 16, 2024</p>
        </header>
        <div className="post-image">
          {/* <img src={fabricSelectionImage} alt="Fabric selection for custom suit" />s */}
        </div>
        <article className="post-content">
          <p>
            Choosing the right fabric for your custom suit is a crucial step in ensuring that you look and feel your best. The fabric you choose will determine the comfort, durability, and overall appearance of your suit. Here are some tips to help you make the perfect choice.
          </p>
          <h2>Consider the Season</h2>
          <p>
            The season in which you plan to wear your suit plays a significant role in fabric selection. For summer, opt for lightweight fabrics like linen, cotton, or a lightweight wool blend to keep you cool. For winter, heavier fabrics like wool, tweed, and flannel are ideal for providing warmth and comfort.
          </p>
          <h2>Think About the Occasion</h2>
          <p>
            The occasion for which you need the suit will also influence your fabric choice. For formal events, high-quality wool or wool blends are excellent choices due to their luxurious feel and appearance. For less formal settings, fabrics like cotton or linen can offer a more relaxed and comfortable fit.
          </p>
          <h2>Understand Fabric Durability</h2>
          <p>
            Durability is another important factor to consider. Wool is known for its durability and resilience, making it a popular choice for suits that will see frequent use. Linen, while breathable and lightweight, tends to wrinkle more easily and may not be as durable.
          </p>
          <h2>Feel the Fabric</h2>
          <p>
            When selecting fabric, it's essential to feel it. The texture can greatly affect the comfort and appearance of your suit. A smooth, soft fabric will feel more comfortable and look more elegant, while a rougher texture might be less comfortable and look more casual.
          </p>
          <h2>Consult with Your Tailor</h2>
          <p>
            Your tailor is an excellent resource for fabric selection. They can provide valuable insights based on your specific needs and preferences. Don’t hesitate to ask for samples or swatches to help you make an informed decision.
          </p>
        </article>
        <div className="another-blog-post">
          <header className="post-header">
            <h1>How to Maintain Your Custom Suit for Longevity</h1>
            <p className="post-date">May 18, 2024</p>
          </header>
          <div className="post-image">
            {/* Add your image here */}
          </div>
          <article className="post-content">
            <p>
              After investing in a custom suit, it's essential to maintain it properly to ensure its longevity and pristine appearance. Here are some tips to help you care for your custom suit and keep it looking sharp for years to come.
            </p>
            <h2>Hang Your Suit Correctly</h2>
            <p>
              Use a sturdy, wide-shouldered hanger to support the shape of your suit jacket. Hang the trousers with a clip hanger or over the bar of the hanger to prevent creases and maintain their shape.
            </p>
            <h2>Brush Your Suit Regularly</h2>
            <p>
              Invest in a good-quality clothes brush and use it to remove dust, lint, and surface dirt from your suit. Brushing your suit after each wear helps prevent the accumulation of debris and keeps the fabric looking clean and fresh.
            </p>
            <h2>Rotate Your Suits</h2>
            <p>
              Avoid wearing the same suit every day to allow each suit to rest and recover its shape. Rotate your suits regularly to distribute wear evenly and extend their lifespan.
            </p>
            <h2>Store Your Suit Properly</h2>
            <p>
              When not in use, store your suit in a breathable garment bag to protect it from dust, light, and moisture. Hang the garment bag in a cool, dry closet away from direct sunlight to preserve the fabric's color and integrity.
            </p>
            <h2>Invest in Professional Cleaning</h2>
            <p>
              Schedule regular professional dry cleaning for your suits to remove deep-seated dirt, stains, and odors. Choose a reputable dry cleaner experienced in handling delicate fabrics to ensure the best results without damaging your suit.
            </p>
          </article>
        </div>
      </div>

    </>
  );
};

export default Blogs;
