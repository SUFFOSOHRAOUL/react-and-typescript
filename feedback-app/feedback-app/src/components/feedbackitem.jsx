
function FeedbackItem( {item}) {
  
  
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-dislay">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
   