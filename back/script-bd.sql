USE smarthint;

drop table if exists customer;

CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    registered_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    blocked BOOLEAN NOT NULL DEFAULT FALSE,
    person_type ENUM('Individual', 'Legal Entity') NOT NULL,
    cpf_cnpj VARCHAR(20),
    state_registration VARCHAR(20),
    gender ENUM('Female', 'Male', 'Other'),
    birth_date DATE,
    last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    passwordCustomer TEXT NOT NULL,
	saltPassword TEXT NOT NULL,
    UNIQUE (email),
    UNIQUE (cpf_cnpj),
    UNIQUE (phone)
);


CREATE TABLE settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(255) NOT NULL,
    setting_value VARCHAR(255) NOT NULL,
    UNIQUE (setting_key)
);

INSERT INTO settings (setting_key, setting_value  ) VALUES 
('individuals_state_registration', 'false');
