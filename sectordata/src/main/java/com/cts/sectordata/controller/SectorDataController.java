package com.cts.sectordata.controller;

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
import com.cts.sectordata.dao.SectorDataRepository;
import com.cts.sectordata.pojos.SectorData;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/sectordata")
public class SectorDataController {
	@Autowired
	private SectorDataRepository sectordataRepository;
	
	
	@GetMapping("/getAllSectordata")
	public Iterable<SectorData> getAllsectordata()
	{
		return sectordataRepository.findAll();
	}
@PostMapping("/savesectordata")
public SectorData SaveSectorData(@RequestBody SectorData sectordata)
{
System.out.println(sectordata);
sectordataRepository.save(sectordata);
return sectordata;

}
@PutMapping("/updateSectordata/{id}")
public SectorData updateSectordata(@RequestBody SectorData sectordata, @PathVariable("id")Integer id)
{
	sectordata.setId(id);
System.out.println(sectordata);
sectordataRepository.save(sectordata);
return sectordata;
}
@DeleteMapping("/deleteSectorData/{id}")
public boolean deleteSectorData( @PathVariable("id") Integer id)

{

sectordataRepository.deleteById(id);
return true;
}


@GetMapping("/find3/{id}")

public SectorData find3( @PathVariable("id")Integer id)
{
Optional<SectorData> sectordata=sectordataRepository.findById(id);
return sectordata.get();
}

}



