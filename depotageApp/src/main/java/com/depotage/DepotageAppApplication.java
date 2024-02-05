package com.depotage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class DepotageAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepotageAppApplication.class, args);
	}

}
