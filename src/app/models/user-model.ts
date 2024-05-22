export class User {
    UserId!: string;
    Name!: string;
    Surname!: string;
    Username: string;
    EmailAddress: string;
    PhoneNumber: string;
    Balance: number;
  
  
    constructor(UserId: string, Name: string, Surname: string, Username: string, EmailAddress: string, PhoneNumber: string, Balance: number) {
      this.UserId = UserId;
      this.Name = Name;
      this.Surname = Surname;
      this.Username= Username;
      this.EmailAddress = EmailAddress;
      this.PhoneNumber= PhoneNumber;
      this.Balance= Balance
    }
  
     
  
}
