export class Transaction {
    TransactionId!: number;
    Amount!: number;
    Category!: string;
    Date: Date;
    UserId: number;
  
    constructor(transactionId: number, amount: number, category: string, date: Date, userId: number) {
      this.TransactionId = transactionId;
      this.Amount = amount;
      this.Category = category;
      this.Date = date;
      this.UserId = userId;
    }
  }
  