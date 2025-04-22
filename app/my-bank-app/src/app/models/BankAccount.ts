export interface BankAccount {
    id: number;
    accountNumber: string;
    accountHolderName: string;
    balance: number;
    accountType: string;
    createdAt: Date;
}