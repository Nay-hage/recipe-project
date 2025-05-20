'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ItemsPage() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [newRecipe, setNewRecipe] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      window.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/recipes')
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch(() => setRecipes([]));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newRecipe,
        instructions: 'No instructions provided',
        ingredients: [],
      }),
    });

    if (!res.ok) {
      alert('Failed to add recipe');
      return;
    }

    setNewRecipe('');
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    router.push('/login');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="flex justify-between items-center bg-white bg-opacity-90 px-6 py-4 rounded-t-xl shadow-md max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Recipe Manager</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white bg-opacity-90 rounded-b-xl shadow-xl p-8 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8 justify-center">
          <input
            type="text"
            name="name"
            placeholder="New recipe name"
            className="px-4 py-2 border rounded w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newRecipe}
            onChange={(e) => setNewRecipe(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Recipe
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ingredients:</strong>{' '}
                {recipe.ingredients && recipe.ingredients.length > 0 ? recipe.ingredients.join(', ') : 'None'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
