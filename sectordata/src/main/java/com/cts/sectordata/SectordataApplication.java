package com.cts.sectordata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SectordataApplication {

	public static void main(String[] args) {
		SpringApplication.run(SectordataApplication.class, args);
	}

}
