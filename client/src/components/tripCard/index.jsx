const TripCard = () => {
    const formatDate = (date) => {
      if (!date) return '';
  
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    };
  
    return (
      <div className={styles.card}>
        <Image src="/travel_placeholder.jpg" width={550} height={300}/>
        <p className={styles.cardContent}>
          <strong>Destination: </strong>
        </p>
        <p className={styles.cardContent}>
          <strong>Start Date:</strong>
        </p>
        <p className={styles.cardContent}>
          <strong>End Date:</strong>
        </p>
        <p className={styles.cardContent}>
          <strong>Journal Entry:</strong> </p>
      </div>
    );
  };
  
  export default TripCard;