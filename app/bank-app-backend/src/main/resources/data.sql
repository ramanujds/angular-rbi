-- Insert sample data into bank_account table
INSERT INTO bank_account (id, account_number, account_holder_name, balance, account_type, created_at)
VALUES
(1, 'ACC123456', 'John Doe', 5000.00, 'SAVINGS', '2023-01-01 10:00:00'),
(2, 'ACC789012', 'Jane Smith', 10000.00, 'CURRENT', '2023-02-01 11:00:00');

-- Insert sample data into loan_request table
INSERT INTO loan_request (id, tenure, amount, status, request_date)
VALUES
(1, 12, 20000.00, 'PENDING', '2023-03-01'),
(2, 24, 50000.00, 'APPROVED', '2023-03-15');

-- Insert sample data into bank_account_loan_requests table
INSERT INTO bank_account_loan_requests (bank_account_id, loan_requests_id)
VALUES
(1, 1),
(2, 2);


INSERT INTO user_record (id, username, password, role) values
    (1,'user','$2a$12$maU/rzZB3S2pZE4kIMYb6ewjNRfSkd9kzH4Mz84pC.NkZXD8hpotm','USER');
