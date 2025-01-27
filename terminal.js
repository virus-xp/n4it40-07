// Terminal Command Handling
const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    output.innerHTML += `<div><span id="prompt">user@bug-hunter:~$</span> ${command}</div>`;
    handleCommand(command);
    input.value = '';
    terminal.scrollTop = terminal.scrollHeight;
  }
});

function handleCommand(command) {
  let response = '';
  switch (command) {
    case 'help':
      response = 'Available commands: about, projects, contact, social, kali, hack, clear';
      break;
    case 'about':
      response = 'I am a Computer Science Enthusiast, Noob Bug Hunter and Passionate  Penetration Tester with a passion for Cybersecurity. I specialize in finding vulnerabilities and securing systems.';
      break;
    case 'projects':
      response = 'Fetching.......! Load soon........';
      break;
    case 'contact':
      response = 'Email: hacker@bug-hunter.com<br>PGP Key: 0x123456789ABCDEF0';
      break;
    case 'social':
      response = 'GitHub: <a href="https://github.com/n4itr0-07" target="_blank">github.com/bug-hunter</a><br>Twitter: <a href="https://x.com/n4itr0_07" target="_blank">twitter.com/bug-hunter</a>';
      break;
    case 'kali':
      response = 'Kali Linux is my favorite tool for penetration testing. Just love it';
      break;
    case 'hack':
      response = 'Initiating hack sequence... Just kidding!';
      break;
    case 'clear':
      output.innerHTML = ''; // Clear the terminal output
      return; // Exit the function early
    default:
      response = `Command not found: ${command}`;
  }
  output.innerHTML += `<div>${response}</div>`;
}