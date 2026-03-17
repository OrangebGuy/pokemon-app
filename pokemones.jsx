import React, { useState, useEffect } from 'react';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemones = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        setPokemones(data.results);
        setError(null);
      } catch (err) {
        setError('Error al cargar los pokémon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemones();
  }, []);

  if (loading) return <div><p>Cargando pokémon...</p></div>;
  if (error) return <div><p>{error}</p></div>;

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemones.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;