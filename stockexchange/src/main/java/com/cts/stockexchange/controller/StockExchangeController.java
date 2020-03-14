package com.cts.stockexchange.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.PutMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
    import com.cts.stockexchange.dao.StockExchangeRepository;
    import com.cts.stockexchange.pojos.StockExchange;
@RestController
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping("/stockexchange")
	public class StockExchangeController {
		@Autowired
		private StockExchangeRepository stockexchangeRepository;
		
		
		@GetMapping("/getAllStockexchange")
		public Iterable<StockExchange> getAllstockexchange()
		{
			return stockexchangeRepository.findAll();
		}
	@PostMapping("/saveStockexchange")
	public StockExchange Savestockexchange(@RequestBody StockExchange stockexchange)
	{
	System.out.println(stockexchange);
	stockexchangeRepository.save(stockexchange);
	return stockexchange;

	}
	@PutMapping("/updateStockexchange/{id}")
	public StockExchange updateStockexchange(@RequestBody StockExchange stockexchange, @PathVariable("id")int id)
	{
		stockexchange.setId(id);
	System.out.println(stockexchange);
	stockexchangeRepository.save(stockexchange);
	return stockexchange;
	}
	@DeleteMapping("/deleteStockexchange/{id}")

	 public boolean deleteStockexchange(@PathVariable("id")Integer id) {
    stockexchangeRepository.deleteById(id);
      return true;
	 }
	@GetMapping("/find6/{id}")

	public StockExchange find6( @PathVariable("id")Integer id)
	{
	Optional<StockExchange> stockexchange=stockexchangeRepository.findById(id);
	return stockexchange.get();
	}
	}
	

