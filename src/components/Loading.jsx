import { useEffect, useState } from "react";
import "../loading.css"

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prev) => {
        if (prev >= 101) {
          clearInterval(countdown);
          return 100
        }
        return prev + 1;
      });
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        {/* <h1>Loa</h1> */}
        <p>{count}</p>
      </div>
    );
  }

  return children;
};

export default Loading;