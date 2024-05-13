import { Component } from '@angular/core';
import { Transaction } from '../models/transaction.model';
 
@Component({
  selector: 'app-managetransactions',
  templateUrl: './managetransactions.component.html',
  styleUrl: './managetransactions.component.css'
})
export class ManagetransactionsComponent {
  transactionId: number;

  constructor(){
    this.transactionId = 0;
  }
  editTransaction() {
    if (this.transactionId) {
      // Navigate to edit transaction page with transactionId
      console.log('Edit transaction with ID:', this.transactionId);
    } else {
      console.log('Please enter a valid transaction ID.');
    }
  }

  deleteTransaction() {
    if (this.transactionId) {
      // Call delete transaction API with transactionId
      console.log('Delete transaction with ID:', this.transactionId);
    } else {
      console.log('Please enter a valid transaction ID.');
    }
  }

  // Add other methods for additional actions like update, view details, etc.

  onSubmit() {
    // This method can be used if you want to submit the form
    // For now, we are not submitting the form, just handling button clicks
  }
}
