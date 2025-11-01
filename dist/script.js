// myLineUp() prints all the data it receives, concatenates into one string,
// logs to the console, and displays the selection on the page.
function myLineUp(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;

  // status (radio group with name="status")
  const status = form.elements['status'].value;

  // game date (select with name="gameDate")
  const gameDate = form.elements['gameDate'].value;

  // selected players (checkbox group name="players")
  const players = Array.from(form.querySelectorAll('input[name="players"]:checked'))
      .map(cb => cb.value);

  // Print each piece to the console
  console.log('Status:', status);
  console.log('Date:', gameDate);
  console.log('Players:', players);

  // Concatenate all info into one readable string
  const summary = `Status: ${status}; Date: ${gameDate}; Players: ${players.join(', ') || 'None'}`;
  console.log(summary);

  // Display on the web page
  const out = document.getElementById('output');
  out.textContent = summary;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('lineupForm');
  form.addEventListener('submit', myLineUp);
});
