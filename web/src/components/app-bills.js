export default {
    data() {
        const userId = this.$store.state.currentUser.id;
        // this.$http.get('/api/accounts/accounts/' + userId + '/bills')
        //     .then(data => {
        //         return data.json();
        //     })
        //     .then(json => {
        //         //if (this.bills)
        //         //    this.bills = json.bills;
        //     })
        //     .catch(error => {
        //         console.warn(error);
        //     });
        return {
            bills: [
                {bill: {id: 1, balance: 0}},
                {bill: {id: 2, balance: 1120}},
                {bill: {id: 3, balance: 54321}},
                {bill: {id: 4, balance: 99999999}}
            ]
        };
    },
    render(h) {
        return <div class="bills">
            <p class="bills__title">Счета</p>
            <ul class="bills__info">
                {this.bills.map(o => {return (
                    <li>
                        <h1>{o.bill.id}</h1>
                        <h2>{o.bill.balance}</h2>
                    </li>
                );})}
            </ul>
        </div>;
    }
};
