package com.cts.stockexchange.dao;

import org.springframework.data.repository.CrudRepository;


import com.cts.stockexchange.pojos.StockExchange;

public interface StockExchangeRepository extends CrudRepository <StockExchange,Integer>{  

}
