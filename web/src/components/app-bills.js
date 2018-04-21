export default {
    data() {
        const userId = this.$store.state.currentUser.id;
        this.$http.get('/api/accounts/accounts/' + userId + '/bills')
            .then(data => {
                return data.json();
            })
            .then(json => {
                if (this.bills)
                    this.bills = json.bills;
            })
            .catch(error => {
                console.warn(error);
            });
        return {
            bills: []
        };
    },
    render(h) {
        return <div>
            <ul>
                {this.bills.map(o => {return <li>{o.bill.id}</li>})}
            </ul>
        </div>;
    }
};
