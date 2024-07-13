import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import ProgressiveImage from "react-progressive-image";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, url, githubUrl,demoUrl } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible" style={{ width: '300px', margin: '0 auto' }}>
      <div className="mi-portfolio-image">
        <ProgressiveImage
          src={imageUrl}
          placeholder="/images/portfolio-image-placeholder.png"
          
        >
          {(src) => <img src={src} alt={title} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />}
        </ProgressiveImage>
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
          {url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="mi-portfolio-links-bar">
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
  {githubUrl && (
    <a 
      rel="noopener noreferrer" 
      target="_blank" 
      href={githubUrl} 
      style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '5px', textDecoration: 'none', color: 'inherit', marginRight: '10px' }}
    >
      <Icon.GitHub /> GitHub
    </a>
  )}
  {demoUrl && (
    <a 
      rel="noopener noreferrer" 
      target="_blank" 
      href={demoUrl} 
      style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '5px', textDecoration: 'none', color: 'inherit' }}
    >
      <Icon.ExternalLink /> Live Demo
    </a>
  )}
</div>

</div>
      {!url ? (
        <h5 style={{ textAlign: 'center' }}>{title}</h5>
      ) : (
        <h5 style={{ textAlign: 'center' }}>
          <a rel="noopener noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h5>
      )}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
