class banc_account {
	
	constructor (balance = 0){
		this.balance = balance;
		this.history = [`account opened with balsnce: ${balance}`];
		
	}
	

	deposit(amount){
	this.balance += amount;
	this.history.push(`deposit ${amount}`);
	};

	freeze(amount){
		this.freezed =0;
		if(this.balance>=amount){
			this.balance = this.balance-amount;
			this.freezed += amount;
			this.history.push(`freesed ${amount}`);
		} else {
			console.log('you have not enough money');
			this.history.push(` try freese ${amount}`);
		}
	}
	unfreeze(amount){
		if(this.freezed>=amount){
			this.freezed -= amount;
			this.balance = this.balance+amount;
			
			this.history.push(`unfreesed ${amount}`);
		} else {
			console.log('you have not enough money');
			this.history.push(` try unfreese ${amount}`);
		}
	}

	getFrozenBalance(){
		this.history.push(`request frozen ballance ${this.freezed}`);
		console.log(`your frozen balance is ${this.freezed}`);
		return this.freezed;
	}

	
	withdrow(amount){
		if(this.balance>=amount){
			this.balance = this.balance-amount;
			this.history.push(`withdrow ${amount}`);
		} else {
			console.log('you have not enough money');
			this.history.push(` try withdrow ${amount}`);
		}
	};
	

	getBalance (){
		this.history.push(`request ballance ${this.balance}`);
		console.log(`your balance is ${this.balance}`);
		return this.balance;
	};

	getHistory (){

		return this.history.join(";  ");
	};

}
let account= new banc_account(100);
account.deposit(100);
account.withdrow(300);
account.freeze(100);
account.getBalance();
account.getFrozenBalance();
account.withdrow(50);
account.getBalance();
account.unfreeze(50);
account.getBalance();
account.getFrozenBalance();
console.log(account.getHistory());

