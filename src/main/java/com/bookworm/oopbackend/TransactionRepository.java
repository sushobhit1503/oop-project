package com.bookworm.oopbackend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository <Transaction, String>  {
}
