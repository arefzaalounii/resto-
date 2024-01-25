function calculateTotal() {
    var numPeople = parseInt(document.getElementById('numPeople').value);
    var totalCost = 10 * numPeople;  
    var specialRequests = document.getElementById('specialRequests').value;
    var numRequests = specialRequests.split('\n').length;
    totalCost += 5 * numRequests;

    document.getElementById('totalCost').textContent = totalCost;
}
