
import {useState, useEffect} from "react"


const PawsRatingInput = ({ rating, disabled, onChange, clickHandler }) => {

  const [activeRating, setActiveRating] = useState(rating)


  useEffect(() => {

  const handleMouseEnter = () => {

    setActiveRating(1) // not dynamic 

  }
  }, [activeRating])

  return (
    <>
    <input
      type="hidden"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
    <div className="rating-input">
      <div className={ activeRating >= 1 ? "filled" : "empty" } onClick ={(e) => {clickHandler(1)}}  onMouseEnter ={e => {if (!disabled) setActiveRating(1)} } onMouseLeave ={e => setActiveRating(rating)} >
        <i className="fa fa-paw"></i>
      </div>
      <div className={ activeRating >= 2 ? "filled" : "empty" } onClick ={(e) => {clickHandler(2)}} onMouseEnter ={e => {if (!disabled) setActiveRating(2)} } onMouseLeave ={e => setActiveRating(rating)} >
          <i className="fa fa-paw"></i>
      </div>
      <div className={ activeRating >= 3 ? "filled" : "empty" } onClick ={(e) => {clickHandler(3)}} onMouseEnter ={e => {if (!disabled) setActiveRating(3)} } onMouseLeave ={e => setActiveRating(rating)} >
        <i className="fa fa-paw"></i>
      </div>
      <div className={ activeRating >= 4 ? "filled" : "empty" } onClick ={(e) => {clickHandler(4)}} onMouseEnter ={e => {if (!disabled) setActiveRating(4)} } onMouseLeave ={e => setActiveRating(rating)} >
        <i className="fa fa-paw"></i>
      </div>
      <div className={ activeRating >= 5 ? "filled" : "empty" } onClick ={(e) => {clickHandler(5)}} onMouseEnter ={e => {if (!disabled) setActiveRating(5)} } onMouseLeave ={e => {if (!disabled) setActiveRating(rating)} } >
        <i className="fa fa-paw"></i>
      </div>
    </div>
    </>
  );
};

export default PawsRatingInput;