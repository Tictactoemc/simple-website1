document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('nameInput').value;
    var greetingMessage = 'Hello, ' + name + '! Welcome to my simple website.';
    
    var greetingDiv = document.getElementById('greetingMessage');
    greetingDiv.innerText = greetingMessage;
    greetingDiv.classList.add('show'); // Show greeting message

    // Show the second question after greeting
    document.getElementById('secondQuestion').classList.remove('hidden');
});

document.getElementById('yesButton').addEventListener('click', function() {
    displayFinalMessage();
});

document.getElementById('noButton').addEventListener('click', function() {
    displayFinalMessage();
});

function displayFinalMessage() {
    var finalMessage = 'Tac is the goat of PvP in Gem SMP.';
    
    var finalMessageDiv = document.getElementById('finalMessage');
    finalMessageDiv.innerText = finalMessage;
    finalMessageDiv.classList.add('show'); // Show the final message

    // Optionally hide the second question after answering
    document.getElementById('secondQuestion').classList.add('hidden');
}
