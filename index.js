let parties = [];
const spanCount = document.querySelector('.spanCount');
const list = document.querySelector('ul');

function render() {
    spanCount.innerHTML = parties.length;
    const html = parties.map(function (party) {
        return `
            <li>
                <h5>${party.name}</h5>
                ${party.description}
            </li>
        `;
    }).join('');
    list.innerHTML = html;
}

async function fetchParties() {
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events');
        const json = await response.json();
        parties = json.data; //had to get some help on this part because I kept getting an error and it wouldnt list the parties.
        render();
    } catch (error) {
        console.error('Error fetching parties:', error);
    }
}

fetchParties();
 // am having trouble figuring out how to delete.

 const partyNameInput = document.getElementById('partyNameInput');
const addPartyButton = document.getElementById('addPartyButton');
const partyDescriptionInput = document.getElementById('partyDescriptionInput');

addPartyButton.addEventListener('click', () => {
    const newPartyName = partyNameInput.value.trim();
    const newPartyDescription = partyDescriptionInput.value.trim();

    if (newPartyName !== '') {
        const newParty = {
            name: newPartyName,
            description: newPartyDescription
        };

        
        parties.push(newParty);
        render();
        partyNameInput.value = '';
        partyDescriptionInput.value = '';
    } else {
        console.error('Please enter a party name'); // I couldn't figure out how to do it with Fetch Method Post so i did it this way instead. I'm still having trouble with Fetch methods.
    }
});
// Overall I feel like this one has been the most challenging for me. I will try my best to understand it.