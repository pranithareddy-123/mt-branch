package com.cts.stockprice.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.stockprice.pojos.StockPrice;

public interface StockPriceRepository extends CrudRepository <StockPrice,String> {

}
