import React from 'react';
import './Blogs.css';
// import fabricSelectionImage from '../../assets/images/fabric-selection.jpg';

const Blogs = () => {
  return (
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
    </div>
  );
};

export default Blogs;
