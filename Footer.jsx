const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {year} News Hub. All Rights Reserved.</p>

        {/* Optional AdSense Placeholder */}
        <div className="adsense">
          <p>Advertisement</p>
          <div className="ad-box">
            Your AdSense Ad Here
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
