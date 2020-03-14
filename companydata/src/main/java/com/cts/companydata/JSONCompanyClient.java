package com.cts.companydata;


import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(value = "jcompany", url = "http://localhost:8087/ipo/")
public interface JSONCompanyClient {
@GetMapping("/findByCompanyName/{companyName}")
public List<IPO> findByCompanyName(@PathVariable("companyName") String companyName);
 }






