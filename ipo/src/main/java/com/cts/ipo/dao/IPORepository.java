package com.cts.ipo.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.cts.ipo.pojos.IPO;

public interface IPORepository extends CrudRepository <IPO,Integer>{ 
Iterable<IPO> findAll();
List<IPO> findByCompanyName(String companyName);
}
