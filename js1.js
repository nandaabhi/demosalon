function openMovieDetails(salonName) {
    alert("You clicked on: " + salonName);
    // Example: Redirect to movie details page
    // window.location.href = `/movies/${movieName.toLowerCase()}`;
  }
  
  // List of movies
  const selectedMovies = ["Identity", "Marco", "Rifle Club"];

  // Checklist container
  const checklist = document.getElementById("movieChecklist");

  // Generate checklist dynamically
  selectedMovies.forEach((movie, index) => {
    // Add tasks for each movie
    checklist.innerHTML += `
      <li>
        <input type="checkbox" id="movie${index + 1}-trailer">
        <label for="movie${index + 1}-trailer">Watched the trailer for "${movie}"</label>
      </li>
      <li>
        <input type="checkbox" id="movie${index + 1}-synopsis">
        <label for="movie${index + 1}-synopsis">Read the synopsis for "${movie}"</label>
      </li>
      <li>
        <input type="checkbox" id="movie${index + 1}-booked">
        <label for="movie${index + 1}-booked">Booked tickets for "${movie}"</label>
      </li>
      <hr>
    `;
  });

