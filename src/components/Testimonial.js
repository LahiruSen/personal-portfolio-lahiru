import React from 'react'

function Testimonial(props){
  return (
    <div className="mi-testimonial-slideritem">
      <div className="mi-testimonial">
        <div className="mi-testimonial-content">
          <p>
            {props.content.content}
          </p>
        </div>
        <div className="mi-testimonial-author">
          <a href={props.content.author.url}>
          <h5>{props.content.author.name}</h5>
          </a>
          <h6>{props.content.author.designation1}</h6>
          <h6>{props.content.author.designation2}</h6>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;