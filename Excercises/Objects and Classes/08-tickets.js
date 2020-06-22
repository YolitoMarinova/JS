function solve(tickets, criterion) {
    class Ticket {
        constructor(info) {
            const [destination, price, status] = info.split('|');

            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination) || a - b,
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status)
    };

    return tickets.map(t => new Ticket(t)).sort(comparator[criterion]);
}