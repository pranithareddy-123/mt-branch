package com.cts.companydata.controller;

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

import com.cts.companydata.JSONCompanyClient;
import com.cts.companydata.dao.CompanyRepository;
import com.cts.companydata.pojos.Company;
    @RestController
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping("/company")
	public class CompanyController {
		@Autowired
		JSONCompanyClient jcompany;

    	@Autowired		
		private CompanyRepository companyRepository;
		@GetMapping("/getAllCompany")
		public Iterable<Company> getAllCompany()
		{
			return companyRepository.findAll();
		}
	@PostMapping("/saveCompany")
	public Company saveCompany(@RequestBody Company company)
	{
	System.out.println(company);
companyRepository.save(company);
	return company;

	}
	@PutMapping("/updateCompany/{companyName}")
	public Company updateCompany(@RequestBody Company company, @PathVariable("companyName")String companyName)
	{
		company.setCompanyName(companyName);
	System.out.println(company);
	companyRepository.save(company);
	return company;
	}
	@DeleteMapping("/deleteCompany/{companyName}")
	public boolean deleteCompany( @PathVariable("companyName") String companyName)

	{
		
		companyRepository.deleteById(companyName);
	return true;
	}
	@GetMapping("/find5/{companyName}")

	public Company find5( @PathVariable("companyName")String companyName)
	{
	Optional<Company> company=companyRepository.findById(companyName);
	Company comp=company.get();
	comp.setIpoList(jcompany.findByCompanyName(companyName));

	return company.get();
	}
	}




