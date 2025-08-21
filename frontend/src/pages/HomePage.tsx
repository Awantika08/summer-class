import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get("http://localhost:3000/users/list")
        .then((response) => {
          const userList = response?.data?.users;
          setUsers(userList || []);
        })
        .catch((error) => {
          alert("Error fetching users");
        });
    }
    fetchData();
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1> Welcome to Jolly House</h1>
          <p>
            Discover trendy outfits, everyday comfort, and your perfect look —
            all in one place.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
              alt="Women's Fashion"
            />
            <h3>Women's Fashion</h3>
          </div>
          <div className="category-card">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
              alt="Men's Wear"
            />
            <h3>Men's Wear</h3>
          </div>
          <div className="category-card">
            <img
              src="https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg"
              alt="Accessories"
            />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* Users Section (example data) */}
      <section className="user-list">
        <h2>Our Shoppers</h2>
        <ul>
          {users.map((user: any, idx: number) => (
            <li key={idx}>{user.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
