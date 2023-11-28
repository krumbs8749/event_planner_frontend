const Notification = ({ message }) => {
    if (!message) return null;
  
    return (
      <div className="notification">
        {message}
        {/* Style this component as needed */}
      </div>
    );
  };
  
  export default Notification;
  