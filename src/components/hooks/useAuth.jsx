import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        } else {
          localStorage.removeItem("token"); 
          setUser({});
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setUser({});
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAuth;
