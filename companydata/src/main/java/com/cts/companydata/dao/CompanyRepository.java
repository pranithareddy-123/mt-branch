package com.cts.companydata.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.companydata.pojos.Company;

public interface CompanyRepository extends CrudRepository<Company,String> 
{

}

